import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Navigate, useNavigate } from 'react-router';

function PageHeader() {
  const user = {
    name: 'Eduardo Santos',
    avatar: '/static/images/avatars/fotoEdu'
  };

  const navigate = useNavigate();
  

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Editar Carros
        </Typography>
        <Typography variant="subtitle2">
          Ola! {user.name}, preencha todos os dados do formulário.
        </Typography>
      </Grid>
      
    </Grid>
  );
}

export default PageHeader;
