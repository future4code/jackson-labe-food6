import styled from "styled-components";
import { Box, Container, FormControl } from "@material-ui/core";

export const MainContainer = styled(Container)`
  width: 100vw;
  max-width: 360px;
  height: 640px;
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100vw;
  max-width: 360px;
  height: 64px;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

export const IconBox = styled.img`
  width: 23px;
  max-width: 360px;
  height: 24px;
  padding-top: 30px;
  object-fit: contain;
`;

export const MainBox = styled(Box)`
  width: 360px;
  max-width: 360px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

export const LogoBox = styled.img`
  width: 104px;
  max-width: 360px;
  height: 58px;
  object-fit: contain;
`;

export const BoxFormTitle = styled(Box)`
  width: 100vw;
  max-width: 360px;
  height: 42px;
  display: flex;
  justify-content: center;
`;

export const FormTitle = styled.h1`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`;

export const Form = styled(FormControl)`
  width: 100vw;
  max-width: 360px;
  height: 448px;
  display: flex;
  gap: 16px;
`;

export const BoxButton = styled(Box)`
  width: 360px;
  height: 42px;
  display: flex;
`;

export const Button = styled.button`
  width: 328px;
  height: 42px;
  border: none;
  border-radius: 2px;
  background-color: #5cb646;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`;
