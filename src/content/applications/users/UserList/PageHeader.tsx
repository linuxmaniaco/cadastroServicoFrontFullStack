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
          Lista de Usuário
        </Typography>
        {/* <Typography variant="subtitle2">
          {user.name}, aqui está a lista de usuários.
        </Typography> */}
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          onClick={() => navigate("/applications/newUser")}
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Cadastrar Usuário
        </Button>
        {/* Transactions */}
        {/* <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          onClick={() => navigate("/management/newUser")}
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Criar Usuário
        </Button> */}
      </Grid>
    </Grid>
  );
}

export default PageHeader;
