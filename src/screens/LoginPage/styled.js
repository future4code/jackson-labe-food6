import styled from "styled-components"

export const Imagem = styled.img`
  padding-top: 104px;
  margin:auto;
  display:flex;
  align-items: center;
` 

export const Text =styled.p`
  padding-top: 30px;
  margin:auto;
  font-family: Roboto;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.49px;
  text-align: center;
  color: #000000;
` 
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top: 20px;
  padding:30px;
` 
export const Input1 = styled.input`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px  #5cb646;
  margin-bottom: 30px; 
 `

export const Input = styled.input`
  grid-column: 1/2;
  grid-row: 1/2;
  border:none;
  font-size: 16px;
  padding: 19px 18px 19px 0px;
    
 `
export const Botao =styled.button`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #5cb646;
  font-family: Roboto;
  font-size: 20px;
`

export const ButonContained = styled.button`
  font-family: Roboto;
  font-size: 20px;
  border:none;
  background:none;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
` 
export const EyesContainer = styled.div`
  display: grid;
  grid-template-columns:271.6px 56.3px ;
  grid-template-rows: 56px;
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #5cb646 ;
  margin-bottom:30px;
` 
export const EyeIcon = styled.img`
  grid-column: 2/3;
  grid-row: 1/2; 
  width: 24px;
  height: 24px;
  object-fit: contain;
  align-self: center;
  justify-self: center;
`