import React from "react";
import { InputLabel, InputWithLabelContainer, InputText } from "./styled";

const InputWithLabel = ()=>{
    return(
        <InputWithLabelContainer>
            <InputLabel>Nome *</InputLabel>
            <InputText />
        </InputWithLabelContainer>
    )
}
export default InputWithLabel;