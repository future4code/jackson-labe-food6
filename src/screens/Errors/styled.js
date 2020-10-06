import styled from "styled-components";
import {MainInputColor} from "../../constants/colors";

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 93px 175px 92px;
    grid-template-rows: 44px;
    width: 175px;
    margin-top: 20px;
`
export const BackButton = styled.button`
    grid-column: 1/2;
    grid-row: 1/2;
    border: none;
    background: none;
    width: 23px;
    height: 24px;
    align-self: center;
    justify-self: left;
`
export const HeaderTitle = styled.p`
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
`
export const ErrorContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
`
export const SearchContainer = styled.div`
    display: grid;
    grid-template-columns: 56.3px 271.6px;
    grid-template-rows: 56px;
    width: 328px;
    height: 56px;
    border-radius: 2px;
    border: solid 1px ${MainInputColor};
`
export const SearchInput = styled.input`
    grid-column: 2/3;
    grid-row: 1/2;
    border: none;
    font-size: 16px;
    padding: 19px 18px 19px 0px;
    /* letter-spacing: -0.39px; */
`
export const SearchIcon = styled.img`
    grid-column: 1/2;
    grid-row: 1/2;
    width: 24px;
    height: 24px;
    object-fit: contain;
    padding-left: 17px;
    padding-right: 15.3px;
    align-self: center;
    justify-self: center;
`
export const ErrorMessage = styled.p`
    width: 296px;
    height: 18px;
    opacity: 0.89;
    font-size: 16px;
    /* letter-spacing: -0.39px; */
    text-align: center;
`