import styled from "styled-components";
import { PlaceholderColor} from "../../constants/colors";

export const FooterContainer = styled.div`
    display: grid;
    width: 90vw;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: 49px;
    border-top: 1px solid ${PlaceholderColor};
    position: fixed;
    justify-content: center;
    margin-left: 16px;
    bottom: 0;
`
export const FooterHomeIcon = styled.img`
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
    width: 27px;
`
export const FooterShoppingCartIcon = styled.img`
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
    width: 27px;
`
export const FooterAvatarIcon = styled.img`
    grid-column: 3/4;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
    width: 27px;
`