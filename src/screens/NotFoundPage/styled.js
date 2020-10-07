import styled from "styled-components";
import { PrimaryColor, SecondaryColor } from "../../constants/colors";


export const NotFoundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${PrimaryColor};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;

`
export const NotFoundMessage = styled.h1`
    color: ${SecondaryColor};
    padding-top: 10vh;
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
`

export const NotFoundImage = styled.img`
    max-width: 50vw;
    object-fit: contain;
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: Top;
    justify-self: center;
`