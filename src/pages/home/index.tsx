import Button from "components/button";
import { Column, Container, Row } from "components/flex";
import Form from "components/form";
import { Input } from "components/inputs/input";
import MonaccoEditor from "components/json-editor";
import { Title } from "components/title/title";
import PostmanToCode from "postman-logic";
import { AxiosInstance } from "postman-logic/axios-instance";
import { ExtractHost } from "postman-logic/extract-host";
import { ReplaceVariables } from "postman-logic/replace-variables";
import { useState } from "react";
import toast from "react-hot-toast";
import { HomeWrapper } from "./style";

interface props {}

const Home: React.FC<props> = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [hosts, setHosts] = useState<{ name: string; value: string }[]>([]);
  const [step, setStep] = useState<"json" | "hosts" | "axios" | "output">(
    "json"
  );
  const [baseUrl, setBaseUrl] = useState<string>("");

  const handleConvert = () => {
    if (!input) return setOutput("");
    try {
      if (step === "json") {
        const hosts = ExtractHost(JSON.parse(input));
        setHosts(hosts.map((item) => ({ name: item, value: "" })));
        return setStep("hosts");
      }
      if (step === "hosts") {
        return setStep("axios");
      }
      if (step === "axios") {
        const axiosString = AxiosInstance(baseUrl);
        let result = PostmanToCode(JSON.parse(input));
        if (result) {
          result = `${axiosString}\n\n${result}`;
          result = ReplaceVariables(result)(
            hosts.map((item) => ({ variable: item.name, value: item.value }))
          );
          setOutput(result);
        }
        return setStep("output");
      }
    } catch (e) {
      console.log(e);
      toast.error("Please, enter valid data");
    }
  };

  const reset = () => {
    setStep("json");
    setInput("");
    setOutput("");
    setBaseUrl("");
    setHosts([]);
  };

  return (
    <Container>
      <HomeWrapper>
        <Column>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=alitoshmatov2001&repo=postman-to-code&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
          <Title style={{ marginBottom: 20 }}>
            Postman json data to typescript types
          </Title>
          <h3>Enter postman json data</h3>
          <Row>
            <MonaccoEditor language="json" value={input} onChange={setInput} />
          </Row>
          {step !== "json" &&
            hosts.map((item, index) => (
              <Row style={{ marginTop: 20 }}>
                <Input
                  placeholder=""
                  style={{ marginRight: 20 }}
                  value={item.name}
                  onChange={() => {}}
                  disabled
                />
                <Input
                  placeholder="Leave blank for removing host"
                  type="text"
                  value={hosts[index].value}
                  onChange={(value) =>
                    setHosts((prev) => {
                      prev[index].value = value;
                      return [...prev];
                    })
                  }
                />
              </Row>
            ))}

          {step !== "hosts" && step !== "json" && (
            <Row style={{ marginTop: 20 }}>
              <Input
                placeholder="Base url"
                disabled={step === "output"}
                value={baseUrl}
                onChange={setBaseUrl}
              />
            </Row>
          )}

          <Button style={{ marginTop: 20 }} size="md" onClick={handleConvert}>
            Convert
          </Button>
          {step === "output" && output && (
            <>
              <h3 style={{ marginTop: 20 }}>Generated Typescript types</h3>
              <Row>
                <MonaccoEditor
                  language="typescript"
                  value={output}
                  onChange={(v) => {}}
                />
              </Row>
            </>
          )}
          {step === "output" && (
            <Row style={{ marginTop: 20 }}>
              <Button style={{ marginRight: 20 }} size="md" onClick={reset}>
                Reset
              </Button>
            </Row>
          )}
        </Column>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
