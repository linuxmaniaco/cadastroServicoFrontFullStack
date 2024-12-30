import axios from "axios";

class UsuarioService {

    serverPath = "/api/usuarios";

    apiURL = process.env.REACT_APP_API_URL;
    
    save(usuario) {
        // return axios.post(this.apiURL + this.serverPath, usuario)
        return axios.post("http://localhost:8080" + this.serverPath, usuario)
    }

    getAllUsuario(){
        return axios.get("http://localhost:8080" + this.serverPath)
        // console.log(this.getAllUsuario, 'log do axios');
    }
    
}
export default UsuarioService;