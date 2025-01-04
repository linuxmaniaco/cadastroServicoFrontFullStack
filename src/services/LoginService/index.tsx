import axios from 'axios';
import axiosInstance from '../../infra/axiosInstance';

class LoginService {
  logar(user:string, password: string){
    return axios.post("http://localhost:8080/api/usuarios/login", {email:user, password: password})
}

  getMyProfile(){
    return  axiosInstance.get("http://localhost:8080/api/usuarios/my-profile")

  }
}
export default LoginService;