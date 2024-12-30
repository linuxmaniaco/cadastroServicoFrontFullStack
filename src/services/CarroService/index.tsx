import axios from "axios";
import { Carro } from '../../models/carros';

class CarroService {

    serverPath = "/api/carros";
    
    save(carro) {
        return axios.post("http://localhost:8080" + this.serverPath, carro)
    }

    getAllCarros(){
        return axios.get("http://localhost:8080" + this.serverPath)
        
    }

    delete(id){
        return axios.delete("http://localhost:8080" + this.serverPath + "/" + id)
    }

    getById(id:number) {
        return axios.get<Carro>(`http://localhost:8080${this.serverPath}/${id}`)
    }
}
export default CarroService;