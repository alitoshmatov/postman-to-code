import styled, { css } from "styled-components";

interface props {
  size: "sm" | "md";
}

const sizes = {
  sm: css`
    max-width: 100px;
    padding: 10px 15px;
  `,
  md: css`
    max-width: 150px;
    padding: 20px 25px;
  `,
};

const Button = styled.button<props>`
  width: 100%;
  border-radius: 5px;
  background-color: #1e1e1e;
  color: white;
  font-weight: bold;

  ${({ size }) => sizes[size]}
`;

export default Button;
