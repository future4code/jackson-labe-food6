import React from 'react'
import logo from "../../assets/img/logo-future-eats-invert1.png"
import Senha from "../../assets/img/senha.png"
import {Imagem, Text ,InputsContainer,Input,Input1,Botao,EyesContainer,EyeIcon} from "./styled";


const LoginForm = () => {
  return (
      <div >
    <Imagem src={logo} alt="logo future eats" />
      <Text>Entrar</Text>
      <InputsContainer> 
      <Input1
        placeholder= 'email@email.com'
        label='E-mail'
        type='email'
        required
        autoFocus
      />
      <EyesContainer> 
        <Input
          placeholder= 'Mínimo 6 caracteres'
          type='email'
          require
        />
        <EyeIcon src={Senha}/>
      </EyesContainer>
      <Botao>
        Entrar
      </Botao>
     </InputsContainer>
    </div> 
  )
}
export default LoginForm

