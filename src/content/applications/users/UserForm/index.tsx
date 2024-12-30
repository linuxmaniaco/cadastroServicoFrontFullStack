import { Password, Title } from "@mui/icons-material";
import { Box, Card, CardHeader, Typography, Avatar, Grid, Container, Divider, CardContent, TextField, Select, MenuItem, Button } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
// import PageHeader from "src/content/management/UserForm/PageHeaderr";
import PageHeader from "src/content/applications/users/UserForm/PageHeader";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

import { useTheme } from '@mui/material/styles';
import RecentOrders from "../UserList/RecentOrders";
import { useState } from "react";
import { useNavigate } from "react-router";
import UsuarioService from "src/services/UsuarioService";
import toast, { Toaster } from "react-hot-toast";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { string } from "prop-types";


const UserForm:React.FC = () =>{
    interface interfaceUser {
        nome: string
        email: string,
        cargo: string,
        password: string,
        avatar: string
    }

    const schema = yup.object().shape({
        nome: yup.string().required("Este campo é obrigatório").min(3, "Este campo deve ter no mínimo 3 letras").max(50, "Este campo deve ter no mínimo 50 letras"),
        email: yup.string().required("Este campo é obrigatório").email('Email inválido!'),
        cargo: yup.string().required("Este campo é obrigatorio").min(1, "Este campo deve ter no mínimo 15 letras").max(50, "Este campo deve ter no mínimo 50 letras"),
        password: yup.string().required("Este campo é obrigatorio"),
        avatar: yup.string().required("Este campo é obrigatório")
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver:  yupResolver(schema)})

    const onSubmit = (formData:interfaceUser) => {
        let usuarioService = new UsuarioService();
        console.log(formData)

        usuarioService.save(formData).then((response => {
            console.log(formData);
            toastSucess()
        })).catch((error) => {
            console.log(formData);
            toastError()
        });
    }

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

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     let usuarioService = new UsuarioService();
    //     usuarioService.save(formData).then((response => {
    //         console.log("Salvo com sucesso!")
    //         toastSucess()
    //     })).catch((error) => {
    //         console.log(error)
    //         toastError()
    //     });
        

    //     console.log(formData)
    // }


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
                                    onSubmit={handleSubmit(onSubmit)}

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
                                            // value={formData.nome}
                                            // onChange={handleChange}
                                            label="Nome: "
                                            {...register("nome")}
                                            error={!! errors.nome}
                                            helperText={errors.nome?.message}
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
                                            label="Email"
                                            {...register("email")}
                                            error={!! errors.email}
                                            helperText={errors.email?.message}
                                        />
                                            
                                        
                                        <TextField
                                            id="cargo"
                                            required
                                            name="cargo"
                                            label="Cargo"
                                            {...register("cargo")}
                                            error={!! errors.cargo}
                                            helperText={errors.cargo?.message}
                                        />

                                        <TextField
                                            id="avatar"
                                            required
                                            name="avatar"
                                            label="Link do seu avatar"
                                            {...register("avatar")}
                                            error={!! errors.avatar}
                                            helperText={errors.avatar?.message}
                                        />
                                        

                                        <TextField
                                            id="password"
                                            required
                                            type="password"
                                            name="password"
                                            label="Senha"
                                            {...register("password")}
                                            error={!! errors.password}
                                            helperText={errors.password?.message}
                                        />

                                    </div>

                                    <Grid sm item>

                                        <Button
                                            type="submit" 

                                            sx={{ mt: { xs: 2, md: 0 } }}
                                            variant="contained"
                                            // onClick={() => navigate("/management/newUser")}
                                        >
                                            Cadastrar
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




    

// function yupResolver(schema: yup.ObjectSchema<{ name: string; }, yup.AnyObject, { name: undefined; }, "">): import("react-hook-form").Resolver<import("react-hook-form").FieldValues, any> {
//     throw new Error("Function not implemented.");
// }
  