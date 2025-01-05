import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import UsersList from 'src/content/management/UsersList';
import { useEffect, useState } from 'react';
import LoginService from '../../../services/LoginService';

function PageHeader() {
  // const user = {
  //   name: 'Eduardo Santos',
  //   avatar: '/static/images/avatars/fotoEdu.jpg'
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
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.nome}
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Bem Vindo, {user.nome}!
        </Typography>
        <Typography variant="subtitle2">
          Vamos focar!
          
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
