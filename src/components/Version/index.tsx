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