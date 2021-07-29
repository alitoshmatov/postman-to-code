import { CSSProperties } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import styled from "styled-components";

interface props {
  code: string;
  style?: CSSProperties;
}

const StyledCode: React.FC<props> = ({ code, style }) => {
  return (
    <Wrapper style={style}>
      <SyntaxHighlighter language="typescript" style={a11yDark}>
        {code}
      </SyntaxHighlighter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 5px;
`;

export default StyledCode;
