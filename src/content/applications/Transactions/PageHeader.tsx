import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const user = {
    name: 'Eduardo Santos',
    avatar: '/static/images/avatars/fotoEdu'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Usuários
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are your recent transactions
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Criar Usuário
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
