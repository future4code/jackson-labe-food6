import styled from "styled-components";
import {MainInputColor, PrimaryColor, DisabledButton, PlaceholderColor, SecondaryColor} from "../../constants/colors";


export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 93px 175px 92px;
    grid-template-rows: 44px;
    width: 175px;
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
    grid-template-rows: 1fr 1fr;
    width: 360px;
    height: 76px;
    padding: 16px;
`
export const DeliverAddressTitle = styled.p`
    grid-column: 1/2;
    grid-row: 1/2;
    color: ${MainInputColor};
    margin-bottom: 8px;
    text-align: left;
    display: block;
`
export const DeliverAddress = styled.p`
    grid-column: 1/2;
    grid-row: 2/3;
    text-align: left;
`
export const CartStatusContainer = styled.div`
    width: 360px;
    height: 42px;
    padding: 12px 32px;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 33px;
`
export const CartContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 104px;
    grid-template-rows: 1fr 1fr;
    margin: 0px 16px 26px 16px;
    row-gap: 14px;
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
    grid-template-columns: 25px 1fr;
    grid-template-rows: 25px 5px 25px 25px;
    column-gap: 8px;
    margin: 0px 16px;
`
export const PaymentTitle = styled.p`
    grid-column: 1/3;
    grid-row: 1/2;
    text-align: left;
    margin-bottom: 8px;
`
export const PaymentDivider = styled.line`
    grid-column: 1/3;
    grid-row: 2/3;
    border-top: 1px solid ${PrimaryColor};
    margin-bottom: 11px;
`
export const CheckingMoneyIcon = styled.img`
    grid-column: 1/2;
    grid-row: 3/4;
    width: 24px;
`
export const CheckingCreditCardIcon = styled.img`
    grid-column: 1/2;
    grid-row: 4/5;
    width: 24px;
`
export const CheckingMoney = styled.p`
    grid-column: 2/3;
    grid-row: 3/4;
    margin-bottom: 14px;
    text-align: left;
`
export const CheckingCreditCard = styled.p`
    grid-column: 2/3;
    grid-row: 4/5;
    margin-bottom: 14px;
    text-align: left;
`
export const PayButton = styled.button`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: ${DisabledButton};
    margin: 16px;
    padding: 12px 16px;
    font-size: 16px;
`
export const Footer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: 49px;
    border-top: 1px solid ${PlaceholderColor};
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