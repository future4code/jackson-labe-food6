import React from "react";
import styled from 'styled-components'
import food from './Img/food.png'
import burguer from './Img/burguer.png'

const MainContainer =styled.div`
width: 100vw;
height: 100vh;
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
margin: 10px 0px;
width:100vw;
height:1px;
background-color: #b8b8b8 ;
`
const CardProduct = styled.div`
display:flex;
flex-direction:column;
`
const ImgProduct = styled.img`
margin: 0px 16px;
`
const TextCardProduct = styled.p`
margin: 5px 16px;
`
const DivideTitle = styled.p`
margin: 10px 16px;
`
const Menu = styled.div`
display:flex;
height: 112px;
margin: 0px 16px;
border: 2px solid black;
border-radius: 10px;
`
const ImgMenu = styled.img`
display:flex;
flex:1;
`
const TextMenu = styled.div`
display:flex;
flex-direction:column;
flex:3;

`
const DescriptionProduct = styled.div`
margin: 5px 16px;
font-size: 12px;

`
const ContainerPrice = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
height: 50px;

`

const PriceBurguer = styled.div`
font-size: 15px;
`

const AddButton = styled.div`
font-size: 12px;
border: 1px solid black;
border-radius: 10px;

`




const RestaurantPage = () => {
  return (
    <MainContainer>
      <Header>
      <BoxHours>9:41 AM</BoxHours>
      <BoxTitle>Restaurante</BoxTitle>
      </Header>
      <Divider/>
      <CardProduct>
        <ImgProduct src={food}/>
        <TextCardProduct>Bullguer Vila Madalena</TextCardProduct>
        <TextCardProduct>Burger</TextCardProduct>
        <TextCardProduct>50 - 60 min </TextCardProduct>
        <TextCardProduct>R. Fradique Coutinho, 1136 - Vila Madalena</TextCardProduct>
      </CardProduct>
      <DivideTitle>Principais</DivideTitle>
      <Divider/>
      <Menu>
        <ImgMenu src={burguer}/>
        <TextMenu>
          <DescriptionProduct>Bullguer</DescriptionProduct>
          <DescriptionProduct>Pão, carne, queijo, picles e molho;</DescriptionProduct>
          <ContainerPrice>
            <PriceBurguer>R$ 20,00</PriceBurguer>
            <AddButton>Adicionar</AddButton>
          </ContainerPrice>
        </TextMenu>
        
      </Menu>
  
    </MainContainer>
  );
};

export default RestaurantPage;
