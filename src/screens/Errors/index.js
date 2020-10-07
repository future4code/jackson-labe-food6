import React from "react";
import { BackButton, ErrorContainer, ErrorMessage, HeaderContainer, HeaderTitle } from "./styled";
import back from "../../assets/img/back.svg"
import SearchBar from "../../components/inputs/SearchBar"

const ErrorPage = () => {
  return (
    <>
      <HeaderContainer>
          <BackButton><img src={back}/></BackButton>
          <HeaderTitle>Busca</HeaderTitle>
      </HeaderContainer>

      <ErrorContainer>
        {/* <SearchContainer>
          <SearchIcon src={Search}/>
          <SearchInput />
        </SearchContainer> */}
        <SearchBar />

        <ErrorMessage>Não encontramos :(</ErrorMessage>

      </ErrorContainer>
    </>
  );
};

export default ErrorPage;
