import styled from "styled-components";
import {MainInputColor, PrimaryColor, DisabledButton, PlaceholderColor, SecondaryColor} from "../../constants/colors";


export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 93px 1fr 92px;
    grid-template-rows: 44px;
    width: 100vw;
    margin-top: 20px;
    border-bottom: 1px solid ${PlaceholderColor};
`
export const HeaderTitle = styled.p`
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
`
export const DeliverAdressContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5vh 5vh;
    width: 90vw;
    height: 10vh;
    padding: 1vh 16px;
`
export const DeliverAddressTitle = styled.p`
    grid-column: 1/2;
    grid-row: 1/2;
    color: ${MainInputColor};
    text-align: left;
`
export const DeliverAddress = styled.p`
    grid-column: 1/2;
    grid-row: 2/3;
    text-align: left;
`
export const CartStatusContainer = styled.div`
    width: 100vw;
    height: 4vh;
    padding: 1vh 0px;
    text-align: center;
    margin: 4vh 0px 1vh 0px;
`
export const CartContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 5vh 5vh;
    margin: 0px 16px 1vh 16px;
`
export const DeliverPrice = styled.p`
    grid-column: 2/3;
    grid-row: 1/2;
    text-align: right;
`
export const SubtotalPrice = styled.p`
    grid-column: 2/3;
    grid-row: 2/3;
    text-align: right;
    color: ${SecondaryColor};
    text-transform: capitalize;
`
export const SubtotalTitle = styled.p`
    grid-column: 1/2;
    grid-row: 2/3;
    text-align: left;
    text-transform: capitalize;
`
export const PaymentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 12fr;
    grid-template-rows: 5vh 3vh 5vh 5vh;
    column-gap: 8px;
    margin: 0px 16px;
`
export const PaymentTitle = styled.p`
    grid-column: 1/3;
    grid-row: 1/2;
    text-align: left;
`
export const PaymentDivider = styled.line`
    grid-column: 1/3;
    grid-row: 2/3;
    margin-top: 2vh;
    border-top: 1px solid ${PrimaryColor};
`
export const CheckingMoneyIcon = styled.img`
    grid-column: 1/2;
    grid-row: 3/4;
    width: 24px;
    justify-self: left;
    align-self: center;
`
export const CheckingCreditCardIcon = styled.img`
    grid-column: 1/2;
    grid-row: 4/5;
    width: 24px;
    justify-self: left;
    align-self: center;
`
export const CheckingMoney = styled.p`
    grid-column: 2/3;
    grid-row: 3/4;
    text-align: left;
    align-self: center;
`
export const CheckingCreditCard = styled.p`
    grid-column: 2/3;
    grid-row: 4/5;
    text-align: left;
    align-self: center;
`
export const PayButton = styled.button`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: ${DisabledButton};
    margin: 16px;
    padding: 12px 16px;
    font-size: 16px;
    justify-self: center;
    align-self: center;
    position: fixed;
    bottom: 49px;
`
export const Footer = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: 49px;
    border-top: 1px solid ${PlaceholderColor};
    position: fixed;
    justify-content: center;
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