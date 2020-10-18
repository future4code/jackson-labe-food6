import React from "react";
import { FooterContainer, FooterAvatarIcon, FooterHomeIcon, FooterShoppingCartIcon } from "./styled";
import HomeIcon from "../../assets/img/homepage.svg";
import ShoppingCartIcon from "../../assets/img/shopping-cart.svg";
import AvatarIcon from "../../assets/img/avatar.svg";
import { goToFeed,goToCart,goToPerfil } from "../../routes/Coordinator";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterHomeIcon onSubmit={() =>goToFeed(history)} src={HomeIcon} />
        <FooterShoppingCartIcon onSubmit={() =>goToCart(history)} src={ShoppingCartIcon} />
        <FooterAvatarIcon onSubmit={() =>goToPerfil(history)}  src={AvatarIcon} />
      </FooterContainer>
    </>
  );
};

export default Footer;
