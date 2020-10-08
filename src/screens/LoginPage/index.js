import React, { useEffect } from "react";
import { goToFeed, goToSignUp } from "../../routes/Coordinator";
import LoginForm from './LoginForm';
import { useHistory } from "react-router-dom";
import { PageTextContainer } from "./styled";
import { TextButton } from "../../components/textButtonStyle";
// import useProtectPage from "../../hooks/useProtectPage";


const LoginPage = () => { 
  const history = useHistory()

  useEffect(()=>{
    const token = window.localStorage.getItem("token");

    if (token) {
      goToFeed(history)
    } 
  });

  // useProtectPage()
  return (
  <>
    <LoginForm />
    <PageTextContainer>
      <TextButton onSubmit={() =>goToSignUp(history)}>Não possui cadastro? Clique aqui.</TextButton>
    </PageTextContainer>

   </>
  );
};
export default LoginPage;

