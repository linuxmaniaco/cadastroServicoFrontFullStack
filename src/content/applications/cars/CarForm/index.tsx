import { Password, Title } from "@mui/icons-material";
import { Box, Card, CardHeader, Typography, Avatar, Grid, Container, Divider, CardContent, TextField, Select, MenuItem, Button } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
// import PageHeader from "src/content/management/UserForm/PageHeaderr";
import PageHeader from "src/content/applications/cars/CarForm/PageHeader";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

import { useTheme } from '@mui/material/styles';
// import RecentOrders from "../RecentOrders";
import { useState } from "react";
import { createRoutesFromChildren, useNavigate } from "react-router";


const CarForm:React.FC = () =>{

    const genero = [
        {value: "Masculino", label: "Masculino"},
        {value: "Feminino", label: "Feminino"}
    ]

    const [formData, setFormData] = useState({
        modelo:"",
        ano:"",
        cor:"",
        cavalosDePotencia:"",
        fabricante:"",
        pais:"",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name,value)
        setFormData((prevState) => ({ ...prevState, [name]: value}))
    }

    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Cadastro de Carros</title>
            </Helmet>

            <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper>

            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <CardHeader title="Formulário de cadastro" />
                            <Divider />
                            <CardContent>
                                <Box 
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '30ch' }
                                    }}
                                    noValidate
                                    autoComplete="off"

                                >
                                    <div>
                                        <TextField 
                                            fullWidth
                                            required
                                            id="modelo"
                                            name="modelo"
                                            value={formData.modelo}
                                            onChange={handleChange}
                                            label="Modelo: "
                                        />
                                         
                                        {/* <TextField
                                            id="genero"
                                            select
                                            required
                                            label="Genero"
                                            value={formData.genero}
                                            onChange={handleChange}
                                            name="genero"
                                        >
                                            {genero.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>    
                                            ))}
                                            
                                        </TextField> */}

                                        <TextField
                                            id="ano"
                                            required
                                            name="ano"
                                            value={formData.ano}
                                            onChange={handleChange}
                                            label="Ano"
                                        />
                                            
                                        
                                        <TextField
                                            id="cor"
                                            required
                                            
                                            name="cor"
                                            value={formData.cor}
                                            onChange={handleChange}
                                            label="Cor"
                                            
                                        />

                                        <TextField
                                            id="cavalosDePotencia"
                                            required
                                            
                                            name="cavalosDePotencia"
                                            value={formData.cavalosDePotencia}
                                            onChange={handleChange}
                                            label="Cavalos de potencia"
                                            
                                        />
                                        

                                        <TextField
                                            id="fabricante"
                                            required
                                            name="fabricante"
                                            value={formData.fabricante}
                                            onChange={handleChange}
                                            label="Fabricante"
                                        />

                                        <TextField  
                                            id="pais"
                                            required
                                            name="pais"
                                            value={formData.pais}
                                            onChange={handleChange}
                                            label="Pais"
                                        />

                                

                                        

                                        
                                    </div>

                                    <Grid item>

                                        <Button
                                            sx={{ mt: { xs: 2, md: 0 } }}
                                            variant="contained"
                                            onClick={() => navigate("/management/newUser")}
                                        >
                                            Enviar
                                        </Button>
                                    </Grid>
                                </Box>
                            </CardContent>
                        
                    </Grid>
                </Grid>
            </Container>
          
        </>
    );
}
export default CarForm;




    
  