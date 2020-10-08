import React from "react";
import styled from 'styled-components'
import burguer from '../../screens/RestaurantPage/Img/burguer.png'


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

const Cards = () => {
  return (
    
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
  
   
  );
};

export default Cards;
