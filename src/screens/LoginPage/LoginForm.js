import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Container, InputsContainer, LoginFormContainer,ButtonContained} from './styled'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibilityoff from '@material-ui/icons/VisibilityOff';
import Future from '../../assets/img/logo-future-eats-invert1.png'

const LoginForm = () => {
  return (
      <Container>
        <LoginFormContainer>
            <img src={Future} alt={'logo'}/>
            <p>Entrar</p>
          <InputsContainer>
            <TextField
              name={'email'}
              placeholder={'email@email.com'}
              label={'E-mail'}
              variant={'outlined'}
              type={'email'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />
            <TextField
              name={'password'}
              placeholder={'Mínimo 6 caracteres'}
              label={'Senha'}
              variant={'outlined'}
              type={'password'}
              fullWidth
              required
              margin={'normal'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Visibilityoff style={{ color: "#B8B8B8" }} />
                  </InputAdornment>
                ),
              }}
            />
        </InputsContainer>
          <ButtonContained> 
          <Button  
            color={'primary'}
            variant={'contained'}
            type={'submit'}
            fullWidth
            margin={'normal'}
        
          >
            Entrar
          </Button>
          </ButtonContained>
        </LoginFormContainer>
      </Container>
  )
}
export default LoginForm
