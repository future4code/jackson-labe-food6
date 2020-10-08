 import axios from "axios";
 import {Base_Url}  from '../constants/urls';
 import {goToFeed, goToPerfil} from '../routes/Coordinator';


export const login = (body, history) => {
    axios.post(`${Base_Url}/futureEatsA/login`, body)
      .then((response) => {
        console.log(response)
        goToFeed(history)
        })
      .catch((error) => {
        console.log(error)
    alert("Usuário não encontrado")
      })
  }

  export const signup = (body, history) => {
    axios.post(`${Base_Url}/futureEatsA/signup`, body)
      .then((response) => {
        console.log(response)
        goToPerfil(history)
        })
      .catch((error) => {
        console.log(error)
    alert("Email ou CPF já cadastrado")
      })
  }