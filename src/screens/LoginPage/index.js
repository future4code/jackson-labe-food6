import React from "react";
import Button from '@material-ui/core/Button'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
//import { goToSignUpPage } from '../../routes/'



const LoginPage = () => {
  //const history = useHistory()
 
  return (
    <ScreenContainer>
    <LoginForm />
    <SignUpButtonContainer>
      <Button
        //onClick={() =>goToSignUpPage(history)}
        type={'submit'}
        fullWidth
      >
        Não possui cadastro?Clique aqui.
      </Button>
    </SignUpButtonContainer>
  </ScreenContainer>
  );
};

export default LoginPage;
