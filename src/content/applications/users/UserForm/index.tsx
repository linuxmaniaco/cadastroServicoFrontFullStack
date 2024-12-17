import { Password, Title } from "@mui/icons-material";
import { Box, Card, CardHeader, Typography, Avatar, Grid, Container, Divider, CardContent, TextField, Select, MenuItem, Button } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
// import PageHeader from "src/content/management/UserForm/PageHeaderr";
import PageHeader from "src/content/applications/users/UserForm/PageHeader";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

import { useTheme } from '@mui/material/styles';
import RecentOrders from "../RecentOrders";
import { useState } from "react";
import { useNavigate } from "react-router";
import UsuarioService from "src/services/UsuarioService";
import toast, { Toaster } from "react-hot-toast";


const UserForm:React.FC = () =>{

    const toastSucess = () => toast.success("Usuario cadastrado com sucesso");

    const toastError = () => toast.error("Erro ao cadastrar o usuário");

    const genero = [
        {value: "Masculino", label: "Masculino"},
        {value: "Feminino", label: "Feminino"}
    ]

    const [formData, setFormData] = useState({
        nome:"",
        // genero:"",
        email:"",
        cargo:"",
        password:"",
        avatar:"",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name,value)
        setFormData((prevState) => ({ ...prevState, [name]: value}))
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let usuarioService = new UsuarioService();
        usuarioService.save(formData).then((response => {
            console.log("Salvo com sucesso!")
            toastSucess()
        })).catch((error) => {
            console.log(error)
            toastError()
        });
        

        console.log(formData)
    }
    return (
        <>
            

            <Helmet>
                <title>Cadastro de usuário</title>
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
                                    onSubmit={handleSubmit}

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
                                            id="nome"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleChange}
                                            label="Nome: "
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
                                            id="email"
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            label="Email"
                                        />
                                            
                                        
                                        <TextField
                                            id="cargo"
                                            required
                                            
                                            name="cargo"
                                            value={formData.cargo}
                                            onChange={handleChange}
                                            label="Cargo"
                                            
                                        />

                                        <TextField
                                            id="avatar"
                                            required
                                            
                                            name="avatar"
                                            value={formData.avatar}
                                            onChange={handleChange}
                                            label="Link do seu avatar"
                                            
                                        />
                                        

                                        <TextField
                                            id="password"
                                            required
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            label="Senha"
                                        />

                                

                                        

                                        
                                    </div>

                                    <Grid sm item>

                                        <Button
                                            type="submit" 

                                            sx={{ mt: { xs: 2, md: 0 } }}
                                            variant="contained"
                                            // onClick={() => navigate("/management/newUser")}
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
export default UserForm;




    
  