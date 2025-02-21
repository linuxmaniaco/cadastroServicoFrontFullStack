import axios from 'axios';
import axiosInstance from '../../infra/axiosInstance';

class LoginService {

  apiURL = process.env.REACT_APP_API_URL;


  logar(user:string, password: string){
    console.log(this.apiURL, "LINK_API")
    console.log(this.apiURL, `${this.apiURL}/api/usuarios/login`, "LINK_ACESSO - 21/02 18:34")
    return axios.post(`${this.apiURL}/api/usuarios/login`, {email:user, password: password})
}

  getMyProfile(){
    console.log(`${this.apiURL}/api/usuarios/my-profile`)
    return  axiosInstance.get(`${this.apiURL}/api/usuarios/my-profile`)

  }
}
export default LoginService;