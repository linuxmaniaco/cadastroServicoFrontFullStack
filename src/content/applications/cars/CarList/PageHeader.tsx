import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Navigate, useNavigate } from 'react-router';
import SearchBar from '../../../../components/SearchBar';
import React from 'react';
import CsvDownloader from '../../../../components/CsvDownloader';

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
          Lista de Carros
        </Typography>
        {/* <Typography variant="subtitle2">
          {user.name}, aqui está a lista de usuários.
        </Typography> */}
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          onClick={() => navigate("/applications/newCar")}
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Cadastrar Carros
        </Button>
      </Grid>
      <Grid item>
        <CsvDownloader />
      </Grid>
    </Grid>
  );
}

export default PageHeader;
