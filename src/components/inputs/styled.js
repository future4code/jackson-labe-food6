import styled from "styled-components";
import { MainInputColor, SecondaryColor} from "../../constants/colors";

// Search Input

export const SearchFormContainer = styled.form`
    display: grid;
    grid-template-columns: 56.3px 1fr;
    grid-template-rows: 56px;
    width: 90vw;
    height: 56px;
    border-radius: 2px;
    border: solid 1px ${MainInputColor};
`
export const Input = styled.input`
    grid-column: 2/3;
    grid-row: 1/2;
    border: none;
    font-size: 16px;
    padding: 19px 18px 19px 0px;
`
export const SearchButton = styled.button`
    background-color: transparent;
    border: none;
    grid-column: 1/2;
    grid-row: 1/2;
`

export const SearchIconImg = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    padding-left: 17px;
    padding-right: 15.3px;
    align-self: center;
    justify-self: center;
`

//  Input without Label

export const InputContainer = styled.input`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 90vw;
    height: 56px;
    border-radius: 2px;
    border: solid 1px ${MainInputColor};
`

// Input Password

export const PasswordFormContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr 56.3px;
    grid-template-rows: 56px;
    width: 90vw;
    height: 56px;
    border-radius: 2px;
    border: solid 1px ${MainInputColor};
`
export const InputPass = styled.input`
    grid-column: 1/2;
    grid-row: 1/2;
    border: none;
    font-size: 16px;
    padding: 19px 18px 19px 0px;
`
export const PasswordIconImg = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    padding-left: 17px;
    padding-right: 15.3px;
    align-self: center;
    justify-self: center;
    grid-column: 2/2;
    grid-row: 1/2;
`

