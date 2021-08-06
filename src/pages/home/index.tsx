import Button from "components/button";
import { Column, Container, Row } from "components/flex";
import Form from "components/form";
import MonaccoEditor from "components/json-editor";
import { Title } from "components/title/title";
import PostmanToCode from "postman-logic";
import { useState } from "react";
import toast from "react-hot-toast";
import { HomeWrapper } from "./style";

interface props {}

const Home: React.FC<props> = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleConvert = () => {
    console.log("Convert");
    if (!input) return setOutput("");
    try {
      const result = PostmanToCode(JSON.parse(input));
      console.log({ result });
      if (result) {
        setOutput(result);
      }
    } catch (e) {
      console.log(e);
      toast.error("Please, enter valid data");
    }
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
          <Button style={{ marginTop: 20 }} size="md" onClick={handleConvert}>
            Convert
          </Button>
          <h3 style={{ marginTop: 20 }}>Generated Typescript types</h3>
          <Row>
            <MonaccoEditor
              language="typescript"
              value={output}
              onChange={(v) => {}}
            />
          </Row>
        </Column>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
