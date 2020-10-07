
 import axios from "axios";
 import {Base_Url}  from '../constants/urls';
 import {goToFeed} from '../routes/Coordinator';


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