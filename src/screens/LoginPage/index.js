import React from "react";
import { goToSignUp } from "../../routes/Coordinator";
import LoginForm from './LoginForm';
import {ButonContained,MainContainer} from "./styled";
//import useProtectPage from '../../hooks/useProtectPage';
import { useHistory } from "react-router-dom";



const LoginPage = () => { 
  const history = useHistory()
  //useProtectPage()
  return (
  <div>
    <LoginForm />
    <MainContainer>
      <ButonContained
        onClick={() =>goToSignUp(history)}
        type={'submit'}
      >
        Não possui cadastro? Clique aqui.
      </ButonContained>
    </MainContainer>
   </div>
  );
};
export default LoginPage;

