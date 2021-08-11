import styled from "styled-components";
import { colors } from "../../style/variables";

export const TextArea = styled.textarea`
  border-radius: 10px;
  border: 1px solid ${colors.font.dark};
  padding: 20px;
  min-width: 500px;
  min-height: 500px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  resize: vertical;
  width: 100%;

  &::placeholder {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
    opacity: 0.5;
  }
`;
