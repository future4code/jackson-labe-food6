import React from "react";
import LoginForm from './LoginForm'
import {ButonContained,MainContainer} from "./styled";



const LoginPage = () => { 
  return (
  <div>
    <LoginForm />
    <MainContainer>
      <ButonContained>
        Não possui cadastro? Clique aqui.
      </ButonContained>
    </MainContainer>
   </div>
  );
};
export default LoginPage;

