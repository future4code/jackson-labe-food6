import React from "react";
import { FooterContainer, FooterAvatarIcon, FooterHomeIcon, FooterShoppingCartIcon } from "./styled";
import HomeIcon from "../../assets/img/homepage.svg";
import ShoppingCartIcon from "../../assets/img/shopping-cart.svg";
import AvatarIcon from "../../assets/img/avatar.svg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterHomeIcon src={HomeIcon} />
        <FooterShoppingCartIcon src={ShoppingCartIcon} />
        <FooterAvatarIcon src={AvatarIcon} />
      </FooterContainer>
    </>
  );
};

export default Footer;
