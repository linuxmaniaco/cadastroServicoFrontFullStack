import axios from "axios";
import { Carro } from '../../models/carros';

class CarroService {

    serverPath = "api/carros";

    apiURL = process.env.REACT_APP_API_URL;
    
    save(carro) {
        // return axios.post("http://localhost:8080" + this.serverPath, carro)
        return axios.post(this.apiURL + this.serverPath, carro)
    }

    getAllCarros(){
        // return axios.get("http://localhost:8080" + this.serverPath)
        return axios.get(this.apiURL + this.serverPath)
        console.log(this.apiURL, "REsponse aqui");
    }

    delete(id){
        // return axios.delete("http://localhost:8080" + this.serverPath + "/" + id)
        return axios.delete(this.apiURL + this.serverPath + "/" + id)
    }

    getById(id:number) {
        // return axios.get<Carro>(`http://localhost:8080${this.serverPath}/${id}`)
        return axios.get<Carro>(`${this.apiURL}${this.serverPath}/${id}`)
    }

    search(formData: {modelo: string, ano: string, cor: string}) {
        return axios.get<Carro[]>(`${this.apiURL}api/carros/search`, {
            headers:{
                modelo: formData.modelo,
                ano: formData.ano,
                cor: formData.cor
            }
        })
    }
}
export default CarroService;