import axios from "axios";

class CarroService {

    serverPath = "/api/carros";
    
    save(carro) {
        return axios.post("http://localhost:8080" + this.serverPath, carro)
    }

    getAllCarros(){
        return axios.get("http://localhost:8080" + this.serverPath)
        
    }
    
}
export default CarroService;