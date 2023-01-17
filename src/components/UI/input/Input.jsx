import React, { forwardRef } from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const LabelInput = styled.label`
  font-size: 20px;
  color: black;
  margin-top: 10px;
`;
const StyledInput = styled.input`
  width: 500px;
  height: 50px;
border-radius: 5px;
  &:focus {
    background-color: wheat;
  }
`;
const Input = forwardRef((props, ref) => {
  return (
    <InputDiv>
      <LabelInput htmlFor={props.id}>{props.labelName}</LabelInput>
      <StyledInput
        placeholder={props.placeholder || "..."}
        id={props.id}
        type={props.inputType}
        ref={ref}
      />
    </InputDiv>
  );
})

export default Input;



