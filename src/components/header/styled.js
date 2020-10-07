import styled from "styled-components";
import {MainInputColor} from "../../constants/colors";

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 93px 1fr 92px;
    grid-template-rows: 44px;
    width: 90vw;
    margin-top: 20px;
    margin-left: 16px;
    border-bottom: 1px solid ${MainInputColor};

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