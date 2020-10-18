import React from "react";
import { DeliverAddress, HeaderContainer, HeaderTitle, DeliverAddressTitle, DeliverAdressContainer, CartContentContainer, CartStatusContainer, DeliverPrice, SubtotalPrice, SubtotalTitle, PaymentContainer, PaymentTitle, PaymentDivider, CheckingCreditCard, CheckingMoney, CheckingMoneyIcon, CheckingCreditCardIcon, PayButton, Footer, FooterAvatarIcon, FooterHomeIcon, FooterShoppingCartIcon } from "./styled";
import RadioButtonUnchecked from "../../assets/img/radiobutton-unchecked.svg";
import HomeIcon from "../../assets/img/homepage.svg";
import ShoppingCartIcon from "../../assets/img/shopping-cart.svg";
import AvatarIcon from "../../assets/img/avatar.svg";

const Cart = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>
          <p>Meu Carrinho</p>
        </HeaderTitle>
      </HeaderContainer>
      
      <DeliverAdressContainer>
        <DeliverAddressTitle>Endereço de entrega</DeliverAddressTitle>
        <DeliverAddress>Rua Alessandra Vieira, 42</DeliverAddress>
      </DeliverAdressContainer>

      <CartStatusContainer>Carrinho vazio</CartStatusContainer>

      <CartContentContainer>
        <DeliverPrice>Frete R$0,00</DeliverPrice>
        <SubtotalTitle>Subtotal</SubtotalTitle>
        <SubtotalPrice>R$00,00</SubtotalPrice>
      </CartContentContainer>

      <PaymentContainer>
        <PaymentTitle>Forma de Pagamento</PaymentTitle>
        <PaymentDivider />
        <CheckingMoneyIcon src={RadioButtonUnchecked}/>
        <CheckingMoney>Dinheiro</CheckingMoney>
        <CheckingCreditCardIcon src={RadioButtonUnchecked} />
        <CheckingCreditCard>Cartão de crédito</CheckingCreditCard>
      </PaymentContainer>

      <PayButton>Confirmar</PayButton>

      <Footer>
        <FooterHomeIcon src={HomeIcon} />
        <FooterShoppingCartIcon src={ShoppingCartIcon} />
        <FooterAvatarIcon src={AvatarIcon} />
      </Footer>
    </>
  );
};

export default Cart;
