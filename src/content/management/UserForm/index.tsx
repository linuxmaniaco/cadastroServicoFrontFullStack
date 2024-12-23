import { Title } from "@mui/icons-material";
import { Box, Card, CardHeader, Typography, Avatar, Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
// import PageHeader from "src/content/management/UserForm/PageHeaderr";
// import PageHeader from "./src/content/applications/users/PageHeader";
import PageHeader from "src/content/applications/users/UserList/PageHeader";

import { useTheme } from '@mui/material/styles';


const UserForm:React.FC = () =>{
    
    return (
        <>
        <Grid
          
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
            <PageHeader />

        </Grid>
            
          
        </>
    );
}
export default UserForm;




    
  