import React from "react";
import {
  MainContainer,
  Header,
  IconBox,
  MainBox,
  LogoBox,
  BoxFormTitle,
  FormTitle,
  Form,
  BoxButton,
  Button,
} from "./styled";

import backArrow from "../../assets/icons/back.png";
import invertLogo from "../../assets/img/logo-future-eats-invert.png";

import { InputAdornment, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import "fontsource-roboto";

const SignUpPage = () => {
  return (
    <>
      <MainContainer>
        <Header>
          <IconBox src={backArrow} alt="icone de voltar para página anterior" />
        </Header>
        <MainBox>
          <LogoBox src={invertLogo} alt="logo future eats" />
        </MainBox>
        <BoxFormTitle>
          <FormTitle>Cadastrar</FormTitle>
        </BoxFormTitle>
        <Form>
          <TextField
            variant="outlined"
            required="true"
            label="Nome"
            placeholder="Nome e Sobrenome"
            style={{ width: "328px" }}
          />
          <TextField
            variant="outlined"
            required="true"
            label="E-mail"
            placeholder="email@email.com"
            style={{ width: "328px" }}
          />

          <TextField
            variant="outlined"
            required="true"
            label="CPF"
            placeholder="000.000.000-00"
            style={{ width: "328px" }}
          />

          <TextField
            variant="outlined"
            required="true"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            style={{ width: "328px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Visibility style={{ color: "#b8b8b8" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            required="true"
            label="Confirmar"
            placeholder="Confirme a senha anterior"
            style={{ width: "328px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOff style={{ color: "#b8b8b8" }} />
                </InputAdornment>
              ),
            }}
          />
          <BoxButton>
            <Button>Criar</Button>
          </BoxButton>
        </Form>
      </MainContainer>
    </>
  );
};

export default SignUpPage;
