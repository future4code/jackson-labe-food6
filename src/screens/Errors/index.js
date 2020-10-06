import React from "react";
import { BackButton, ErrorContainer, ErrorMessage, HeaderContainer, HeaderTitle, SearchContainer, SearchIcon, SearchInput } from "./styled";
import Search from "../../assets/img/search.svg"
import back from "../../assets/img/back.svg"

const ErrorPage = () => {
  return (
    <>
      <HeaderContainer>
          <BackButton><img src={back}/></BackButton>
          <HeaderTitle>Busca</HeaderTitle>
      </HeaderContainer>

      <ErrorContainer>
        <SearchContainer>
          <SearchIcon src={Search}/>
          <SearchInput />
        </SearchContainer>

        <ErrorMessage>Não encontramos :(</ErrorMessage>

      </ErrorContainer>
    </>
  );
};

export default ErrorPage;
