import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Navigate, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import LoginService from '../../../../services/LoginService';

function PageHeader() {
  // const user = {
  //   name: 'Eduardo Santos',
  //   avatar: '/static/images/avatars/fotoEdu'
  // };

  useEffect(() => {
    let loginService = new LoginService();
    loginService.getMyProfile().then(response => {
      setUser(response.data)
    })
  }, []);

  const [user, setUser] = useState ({
    nome: '',
    avatar: '',
    cargo: ''
  });

  const navigate = useNavigate();
  

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Cadastro de Carros
        </Typography>
        <Typography variant="subtitle2">
          Ola! {user.nome}, preencha todos os dados do formulário.
        </Typography>
      </Grid>
      
    </Grid>
  );
}

export default PageHeader;
