import React from 'react';
import logo from "../../assets/img/logo-future-eats-invert1.png";
import Senha from "../../assets/img/senha.png";
import {Imagem, Text ,InputsContainer,Input,Input1,Botao,EyesContainer,EyeIcon} from "./styled";
import { login } from '../../services/apiRequests';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
  const [form, handleInputChange] = useForm({ email: '', password: ''})
  const history = useHistory()

 const onClickLogin = (event) => {
    event.preventDefault()
      login(form, history)
    }
  
  return (
    <form >  
    <Imagem src={logo} alt="logo future eats" />
      <Text>Entrar</Text>
      <InputsContainer>
     <Input1
        name='email'
        value={form.email}
        placeholder= 'email@email.com'
        onChange={handleInputChange}
        label='E-mail'
        type={'email'}
        required
        autoFocus
      />
      <EyesContainer> 
        <Input
          name='password'
          value={form.password}
          placeholder= 'Mínimo 6 caracteres'
          onChange={handleInputChange}
          type={'password'}
          require
        />
        <EyeIcon src={Senha}/>
      </EyesContainer>
      <Botao
       onClick={onClickLogin}
       type={'submit'}
       >
        Entrar
      </Botao>
  </InputsContainer>
</form>
  )
}
export default LoginForm

