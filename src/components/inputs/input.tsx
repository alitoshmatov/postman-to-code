import { CSSProperties } from "react";
import styled from "styled-components";
import { colors } from "../../style/variables";

const StyledInput = styled.input`
  padding: 15px 30px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.font.dark};
  border-radius: 10px;
  border: 1px solid ${colors.green.dark};
  width: 100%;
`;

const PostFix = styled.span`
  margin-left: -70px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.font.lighter};
  text-align: right;
`;

const Wrapper = styled.div`
  width: 100%;
`;

interface props {
  postfix?: string;
  value: string | number;
  onChange: (value: string) => any;
  placeholder: string;
  type?: "text" | "number" | "password" | "tel";
  style?: CSSProperties;
  required?: boolean;
  disabled?: boolean;
}

export const Input: React.FC<props> = ({
  postfix,
  value,
  required,
  disabled,
  onChange,
  placeholder,
  type = "text",
  style,
}) => (
  <Wrapper style={style}>
    <StyledInput
      type={type}
      disabled={disabled}
      value={value}
      required={!!required}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
    <PostFix>{postfix}</PostFix>
  </Wrapper>
);
