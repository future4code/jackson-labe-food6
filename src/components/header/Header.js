import React from "react";
import { BackButton, HeaderContainer, HeaderTitle } from "./styled";
import back from "../../assets/img/back.svg"

const Header = () => {
  return (
    <>
      <HeaderContainer>
          <BackButton><img src={back}/></BackButton>
          <HeaderTitle>Busca</HeaderTitle>
      </HeaderContainer>
    </>
  );
};

export default Header;
