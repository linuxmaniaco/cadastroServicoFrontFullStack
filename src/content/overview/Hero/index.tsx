// import { Box, Button, CircularProgress, Container, Paper, Typography } from '@mui/material';
// import { Simulate } from 'react-dom/test-utils';
// import error = Simulate.error;
// import TextField from '@mui/material/TextField';
// import { useState } from 'react';
// import LoginService from '../../../services/LoginService';
//
//
// const Login: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const handleLogin = () => {
//     let loginService = new LoginService();
//     loginService.logar(username,password).then((response) => {
//       console.log(response.data)
//     })
//   }
//
//   return (
//     <Container
//                component="main"
//                maxWidth="xs"
//                sx={{
//                  height: '100vh',
//                  display: 'flex',
//                  jsutifyContent: 'center',
//                  alignItems: 'center',
//                }}
//     >
//
//       <Paper
//         elevation={6}
//         sx={{
//           padding: 3,
//           display: 'flex',
//           flexDirection: 'colum',
//           alingItems: 'center',
//           width: '100%',
//           maxWidth: 400,
//         }}
//       >
//         <Typography component='h1' variant='h5'>
//           Login
//         </Typography>
//         {error && (
//           <Typography color="error" variant="body2" sx={{marginTop: 1 }}>
//             {error}
//           </Typography>
//         )}
//
//         <Box component="form" sx={{width: '100%', marginTop: 2}} noValidate>
//           <TextField
//             label="Nome do Usuário"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//
//           <TextField
//             label="Senha"
//             type="password"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             onClick={handleLogin}
//             disabled={loading}
//             sx={{ marginTop: 2}}
//           >
//             {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
//           </Button>
//
//         </Box>
//       </Paper>
//
//     </Container>
//   )
//
// }
//
// export default Login;

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';

import {CircularProgress, Paper,} from '@mui/material';


import TextField from '@mui/material/TextField';
import { useState } from 'react';
import LoginService from '../../../services/LoginService';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL)
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleLogin = () => {
    let loginService = new LoginService();
    loginService.logar(username,password).then((response) => {
      console.log(response.data)
      localStorage.setItem("token", response.data['token']);
    }).catch(error => {
      setError("Nome do usuário ou senha inválido!")
    })
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        jsutifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
           {/*<LabelWrapper color="success">Version 2.0.0</LabelWrapper>*/}

          {/*Titulo do projeto*/}
          <TypographyH1
            justifyContent="center"
            alignItems="center"
            sx={{padding: 0, mb: 4 }} variant="h1"
          >
            Projeto FullStack
          </TypographyH1>

          {/*Subtitulo do projeto*/}
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Pós Graduação
          </TypographyH2>


          {/*<Button*/}
          {/*  component={RouterLink}*/}
          {/*  // to="/dashboards/crypto"*/}
          {/*  to="/starter/welcome"*/}
          {/*  size="large"*/}
          {/*  variant="contained"*/}
          {/*>*/}
          {/*  Entrar*/}
          {/*</Button>*/}

        </Grid>

        <Paper
          elevation={6}
          sx={{
            padding: 3,
            display: 'flex',
            flexDirection: 'colum',
            alingItems: 'center',
            width: '100%',
            maxWidth: 400,
          }}
        >

          <Typography component='h1' variant='h5'>
            Login
          </Typography>
          {error && (
            <Typography color="error" variant="body2" sx={{marginTop: 1 }}>
              {error}
            </Typography>
          )}

          <Box component="form" sx={{width: '100%', marginTop: 2}} noValidate>
            <TextField
              label="Nome do Usuário"
              fullWidth
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              label="Senha"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              disabled={loading}
              sx={{ marginTop: 2}}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
            </Button>

          </Box>


        </Paper>

      </Grid>
    </Container>
  );
}

export default Hero;
