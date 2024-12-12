import axios from "axios";
import { useEffect, useState } from "react";

const Version: React.FC = () => {
    const [version , setVersion] = useState<string>("")
    console.log("Antes do axios" + version)
    useEffect(() => {
        axios.get("http://localhost:8080/api/version").then((response) => {
            console.log("Dentro do axios" + response.data.version)
            setVersion(response.data.version)
            console.log("BASE" + response.data.version)
        });
    });
    
    return <p>Versão: {version}</p>;
};

export default Version;


// const Version: React.FC = () => {
//     const [apiVersion, setApiVersion] = useState<string>("");
    
//     useEffect(() => {
//         axios.get("http://localhost:8080/api/version").then((response) => {
//             setApiVersion(response.data.version);
//             console.log("API Response ", response.data.version);
//         }).catch((error) => {
//             console.error("API Error: ", error);
//         });
//     }, []);
//     console.log("Treminei", apiVersion);
//     // const version = "1.2";
//     return <p>Api Versão: {apiVersion || "Loading..."}</p>;
// };