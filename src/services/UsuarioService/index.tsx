import axios from "axios";

class UsuarioService {

    serverPath = "/api/usuarios";
    
    save(usuario) {
        return axios.post("http://localhost:8080" + this.serverPath, usuario)
    }
}
export default UsuarioService;