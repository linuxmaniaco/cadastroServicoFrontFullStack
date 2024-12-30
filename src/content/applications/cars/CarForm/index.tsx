import { Password, Title } from "@mui/icons-material";
import { Box, Card, CardHeader, Typography, Avatar, Grid, Container, Divider, CardContent, TextField, Select, MenuItem, Button } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
// import PageHeader from "src/content/management/UserForm/PageHeaderr";
import PageHeader from "src/content/applications/cars/CarForm/PageHeader";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

import { useTheme } from '@mui/material/styles';
// import RecentOrders from "../UserList/RecentOrders";
import { useState } from "react";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { string } from "prop-types";
import CarroService from 'src/services/CarroService';


const CarForm:React.FC = () =>{

    interface interfaceCars {
        modelo: string,
        ano: string,
        cor: string,
        cavalosDePotencia: string,
        fabricante: string,
        pais: string
    }

    const schema = yup.object().shape({
        modelo: yup.string().required("Este campo é obrigatório").min(3, "Este campo deve ter no mínimo 3 letras").max(50, "Este campo deve ter no mínimo 50 letras"),
        ano: yup.string().required("Este campo é obrigatório"),
        cor: yup.string().required("Este campo é obrigatorio").min(1, "Este campo deve ter no mínimo 15 letras").max(50, "Este campo deve ter no mínimo 50 letras"),
        cavalosDePotencia: yup.string().required("Este campo é obrigatorio"),
        fabricante: yup.string().required("Este campo é obrigatório"),
        pais: yup.string().required("Este campo é obrigatório")
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver:  yupResolver(schema)})

    const onSubmit = (formData:interfaceCars) => {
        let carroService = new CarroService();
        console.log(formData)

        carroService.save(formData).then((response => {
            toastSucess()
        })).catch((error) => {
            toastError()
        });
    }

    const toastSucess = () => toast.success("Carro cadastrado com sucesso");

    const toastError = () => toast.error("Erro ao cadastrar o carro");

    const [formData, setFormData] = useState({
        modelo:"",
        ano:"",
        cor:"",
        cavalosDePotencia:"",
        fabricante:"",
        pais:""
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
                                            id="modelo"
                                            name="modelo"
                                            // value={formData.nome}
                                            // onChange={handleChange}
                                            label="Modelo: "
                                            {...register("modelo")}
                                            error={!! errors.modelo}
                                            helperText={errors.modelo?.message}
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
                                            label="Ano"
                                            {...register("ano")}
                                            error={!! errors.ano}
                                            helperText={errors.ano?.message}
                                        />
                                            
                                        
                                        <TextField
                                            id="cor"
                                            required
                                            name="cor"
                                            label="Cor"
                                            {...register("cor")}
                                            error={!! errors.cor}
                                            helperText={errors.cor?.message}
                                        />

                                        <TextField
                                            id="cavalosDePotencia"
                                            required
                                            name="cavalosDePotencia"
                                            label="Potência em cavalos"
                                            {...register("cavalosDePotencia")}
                                            error={!! errors.cavalosDePotencia}
                                            helperText={errors.cavalosDePotencia?.message}
                                        />
                                        

                                        <TextField
                                            id="fabricante"
                                            required
                                            type="fabricante"
                                            name="fabricante"
                                            label="Fabricante"
                                            {...register("fabricante")}
                                            error={!! errors.fabricante}
                                            helperText={errors.fabricante?.message}
                                        />
                                        

                                        <TextField
                                            id="pais"
                                            required
                                            type="pais"
                                            name="pais"
                                            label="Pais"
                                            {...register("pais")}
                                            error={!! errors.pais}
                                            helperText={errors.pais?.message}
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
export default CarForm;




    

// function yupResolver(schema: yup.ObjectSchema<{ name: string; }, yup.AnyObject, { name: undefined; }, "">): import("react-hook-form").Resolver<import("react-hook-form").FieldValues, any> {
//     throw new Error("Function not implemented.");
// }
  