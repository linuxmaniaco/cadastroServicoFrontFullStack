import { Title } from "@mui/icons-material";
import { Box, Card, CardHeader, Typography, Avatar, Grid, Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
// import PageHeader from "src/content/management/UserForm/PageHeaderr";
import PageHeader from "src/content/applications/users/UserForm/PageHeader";

import { useTheme } from '@mui/material/styles';
import RecentOrders from "../RecentOrders";


const UserForm:React.FC = () =>{
    
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
                        <p>Teste</p>
                    </Grid>
                </Grid>
            </Container>
          
        </>
    );
}
export default UserForm;




    
  