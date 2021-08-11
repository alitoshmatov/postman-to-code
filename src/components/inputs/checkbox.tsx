import styled from "styled-components";
import { JsxFragment } from "typescript";
import { colors } from "../../style/variables";

interface props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => any;
  id: string;
}

const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  width: 24px;
  height: 24px;

  border: 1px solid ${colors.font.dark};
  box-sizing: border-box;
  border-radius: 3px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  label {
    margin-left: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.font.dark};
  }
`;

export const Checkbox: React.FC<props> = ({ checked, label, onChange, id }) => (
  <CheckboxWrapper>
    <CheckboxInput
      id={id}
      checked={checked}
      onChange={() => onChange(!checked)}
    />
    <label htmlFor={id} dangerouslySetInnerHTML={{ __html: label }} />
  </CheckboxWrapper>
);
