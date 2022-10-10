import styled from "@emotion/styled";

const Input = styled.input`
  color: #000;
  width: 100%;
  color: #000;
  background-color: #fff;
  border-radius: 20px;
  padding: 16px 16px;
  font-size: 22px;
  border: none;
  :hover,
  :focus {
    outline: none;
  }
  @media(max-width: 900px) {
    font-size: 14px;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -15px;
  right: 16px;
  color: #000;
  font-size: 22px;
  @media(max-width: 900px) {
    font-size: 14px;
    top: -12px;
  }
`;

export {
  Input,
  Label
}
