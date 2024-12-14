import { Button, Card, Grid, Typography } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function UserForm() {
    const user = {
        name: 'Eduardo Santos',
        avatar: '/static/images/avatars/fotoEdu'
      };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Lista de Usuário
        </Typography>
        {/* <Typography variant="subtitle2">
          {user.name}, aqui está a lista de usuários.
        </Typography> */}
      </Grid>
      <Grid item>
        
      </Grid>
    </Grid>
  );
}

export default UserForm;


// import { Title } from "@mui/icons-material";
// import { Box, Card, CardHeader, Typography, Avatar, Grid, Container } from "@mui/material";
// import { Helmet } from "react-helmet-async";
// import PageTitleWrapper from "src/components/PageTitleWrapper";
// // import PageHeader from "src/content/management/UserForm/PageHeaderr";
// import PageHeader from "src/content/management/UserForm/PageHeader";

// import { useTheme } from '@mui/material/styles';
// import RecentOrders from "./RecentOrders";
// import Footer from "src/components/Footer";


// const UserForm:React.FC = () =>{
    
//     return (
//         <>

//             <Helmet>
//                 <title>Pagina de Usuários</title>
//             </Helmet>
//             <PageTitleWrapper>
//                 <PageHeader />
//             </PageTitleWrapper>
//             <Container maxWidth="lg">
//                 <Grid
//                 container
//                 direction="row"
//                 justifyContent="center"
//                 alignItems="stretch"
//                 spacing={3}
//                 >
//                 <Grid item xs={12}>
//                     <RecentOrders />
//                 </Grid>
//                 </Grid>
//             </Container>
//             <Footer />
            
//         </>
//     );
// }
// export default UserForm;




    
  