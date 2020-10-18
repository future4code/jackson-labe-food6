import React from "react";
import { PasswordFormContainer, InputPass, PasswordIconImg, InputLabel } from "./styled";
import Visible from "../../assets/icons/senha-2.png";
import Invisible from "../../assets/icons/senha.png";

const InputPassword = ()=>{
    return(
        <PasswordFormContainer>
            <InputLabel>Senha *</InputLabel>
            <InputPass />
            <PasswordIconImg src={Visible}/>
        </PasswordFormContainer>
    )
}
export default InputPassword;