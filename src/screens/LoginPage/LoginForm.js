import React from 'react';
import {InputsContainer, LogoImg, PageText, PageTextContainer } from "./styled";
import { InputWithLabelContainer, InputLabel, InputText, PasswordFormContainer, PasswordIconImg, InputPass } from "../../components/inputs/styled"
import { login } from '../../services/apiRequests';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import LogoFutureEats from "../../assets/img/logo-future-eats-invert.png";
import { MainButton } from '../../components/mainButtonStyle';
import Visible from "../../assets/icons/senha-2.png";
import Invisible from "../../assets/icons/senha.png";

const LoginForm = () => {
  const [form, handleInputChange] = useForm({ email: '', password: ''})
  const history = useHistory()

  const onClickLogin = (event) => {
    event.preventDefault()
      login(form, history)
    }

  // const onClickPassword = (event) =>{
    
  // }
  
  return (
    <form   onSubmit={onClickLogin}>  
      <LogoImg src={LogoFutureEats} alt="FUTURE EATS" />
      <PageTextContainer>
      <PageText>Entrar</PageText>
      </PageTextContainer>
      <InputsContainer>
        <InputWithLabelContainer>
            <InputLabel>E-mail *</InputLabel>
            <InputText 
            name='email'
            value={form.email}
            placeholder= 'email@email.com'
            onChange={handleInputChange}
            label='E-mail'
            type={'email'}
            required
            autoFocus
            />
        </InputWithLabelContainer>
        <PasswordFormContainer>
            <InputLabel>Senha *</InputLabel>
            <InputPass 
            name='password'
            value={form.password}
            placeholder= 'Mínimo 6 caracteres'
            onChange={handleInputChange}
            type={"password"}
            require
            />
            <PasswordIconImg src={Visible}/>
        </PasswordFormContainer>
      

      <MainButton>
          Entrar
      </MainButton>
  </InputsContainer>
</form>
  )
}
export default LoginForm

