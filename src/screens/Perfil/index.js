import React from "react";
import styled from "styled-components"
import  homepage from './Img/homepage.png'
import  avatar  from './Img/avatar.png'
import  shoppingcart  from './Img/shoppingcart.png'

const MainPerfil = styled.div`
width:100vw;
height:640px;
`
const Header = styled.div`
display: flex;
flex-direction: column;
height: 10vh;
width:100vw;
padding-top: 15px;

`
const BoxHours = styled.div`
display: flex;
justify-content:center;
flex:1;

`

const BoxTitle = styled.div`
display:flex;
justify-content:center;
align-items:flex-end;
flex:2;

`
const Divider = styled.div`
margin-top: 10px;
width:100vw;
height:1px;
background-color: #b8b8b8 ;
`
const BoxPerfil = styled.div`
display: flex;
flex-direction: column;
margin-left:16px;
padding:0;
`
const DescriptionPerfil = styled.p`
margin:5px 0px;
padding:0;

`
const BackgroundGray = styled.div`
background-color: #eeeeee;
`
const AddressBox = styled.div`
padding: 1px 0px 1px 16px;
`
const ContainerOrder = styled.div`
display:flex;
flex-direction:column;
height:50vh;
`

const BoxOrder = styled.div`
display:flex;
flex-direction:column;
height:102px;
border: 1px solid black;
border-radius: 10px;
margin:10px 20px;
`
const DescriptionOrder = styled.div`
display: flex;
height: 20px;
padding: 5px 0px 5px 16px;
`

const Footer = styled.footer`
display:flex;
width:100vw;
height: 10vh;
border: 1px solid black;
position: fixed;
bottom:0px;
z-index: 10;
background-color: #fff;
`
const IconsFooter= styled.div`
display:flex;
flex:1;
justify-content:center;
align-items:center;
`

const PerfilPage = () => {
  return (
    <MainPerfil>
      <Header>
        <BoxHours>9:41 AM</BoxHours>
        <BoxTitle>Meu Perfil</BoxTitle>
      </Header>
      <Divider/>
      <BoxPerfil>
        <DescriptionPerfil>Bruna Oliveira</DescriptionPerfil>
        <DescriptionPerfil>bruna_o@gmail.com</DescriptionPerfil>
        <DescriptionPerfil>333.333.333-33</DescriptionPerfil>
      </BoxPerfil>
      <BackgroundGray>
      <AddressBox>
        <p>Endereço Cadastrado</p>
        <p>Rua Alessandra Vieira, 42 - Santana</p>
      </AddressBox>
      </BackgroundGray>
      <p>Historico de Pedidos</p>
      <Divider/>
      <ContainerOrder>
      <BoxOrder>
        <DescriptionOrder>Bullguer Vila Madalena</DescriptionOrder>
        <DescriptionOrder>23 outubro 2019</DescriptionOrder>
        <DescriptionOrder>SubTotal R$67,00</DescriptionOrder>
      </BoxOrder>
      <BoxOrder>
        <DescriptionOrder>Bullguer Vila Madalena</DescriptionOrder>
        <DescriptionOrder>23 outubro 2019</DescriptionOrder>
        <DescriptionOrder>SubTotal R$67,00</DescriptionOrder>
      </BoxOrder>
      <BoxOrder>
        <DescriptionOrder>Bullguer Vila Madalena</DescriptionOrder>
        <DescriptionOrder>23 outubro 2019</DescriptionOrder>
        <DescriptionOrder>SubTotal R$67,00</DescriptionOrder>
      </BoxOrder>
      </ContainerOrder>
      <Footer>
        <IconsFooter><img src={homepage}/></IconsFooter>
        <IconsFooter><img src={shoppingcart}/></IconsFooter>
        <IconsFooter><img src={avatar}/></IconsFooter>
      </Footer>
    </MainPerfil>
  );
};

export default PerfilPage;
