import React from "react";
import Magnifier from "../../assets/icons/search@2x.png";
import { SearchButton, SearchFormContainer, Input, SearchIconImg } from "./styled";

const SearchBar = ()=>{
    return(
        <SearchFormContainer>
            <SearchButton>
                <SearchIconImg src={Magnifier}/>
            </SearchButton>
            <Input placeholder="Pesquisa"/>
        </SearchFormContainer>
    )
}
export default SearchBar;