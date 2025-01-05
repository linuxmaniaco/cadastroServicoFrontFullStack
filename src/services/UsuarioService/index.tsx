import axios from "axios";

class UsuarioService {

    serverPath = "api/usuarios";

    apiURL = process.env.REACT_APP_API_URL;
    
    save(usuario) {
        // return axios.post(this.apiURL + this.serverPath, usuario)
        return axios.post(this.apiURL + this.serverPath, usuario)
    }

    getAllUsuario(){
        return axios.get(this.apiURL + this.serverPath)
        // console.log(this.getAllUsuario, 'log do axios');
    }
    
}
export default UsuarioService;