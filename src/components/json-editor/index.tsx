import Editor from "@monaco-editor/react";
import styled from "styled-components";

interface props {
  value: string;
  onChange: (val: string) => void;
  language: "json" | "typescript";
}

const MonaccoEditor: React.FC<props> = ({ value, onChange, language }) => {
  return (
    <StyledEditor
      defaultLanguage={language}
      theme="vs-dark"
      value={value}
      onChange={(value) => onChange(value || "")}
    />
  );
};

export default MonaccoEditor;

const StyledEditor = styled(Editor)`
  width: 100%;
  height: 400px;
  border-radius: 5px;
`;
