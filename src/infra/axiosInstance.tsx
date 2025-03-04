import axios from 'axios';
import { Simulate } from 'react-dom/test-utils';


const axiosInstance = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: 'https://eduar5027.c44.integrator.host',
  timeout: 10000,

});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  },(error =>{
      return Promise.reject(error)
     })
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.response && error.response.status === 401){
      console.log("Sessão expirada redirecionado para login")
    }
    return Promise.reject(error)
  }
)

export default axiosInstance;