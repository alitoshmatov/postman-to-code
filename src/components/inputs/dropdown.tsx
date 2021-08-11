import styled from "styled-components";
import { colors } from "../../style/variables";

export const Select = styled.select`
  border: 1px solid ${colors.grey.dark};
  border-radius: 10px;
  height: 50px;
  padding: 15px 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.font.dark};
  appearance: none;
`;
