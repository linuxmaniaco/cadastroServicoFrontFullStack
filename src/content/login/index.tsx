import { Box, Button, CircularProgress, Container, Paper, Typography } from '@mui/material';
import { Simulate } from 'react-dom/test-utils';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import LoginService from '../../services/LoginService';
import { useNavigate } from 'react-router';

const Login: React.FC = () => {
  {console.log("estou aqui login")}
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true)
    setError('')
    let loginService = new LoginService();
    loginService.logar(username,password).then((response) => {
      localStorage.setItem("token", response.data['token']);
      navigate("/starter/welcome")
    }).catch(error => {
      setLoading(false)
      setError("Nome do usuário ou senha inválido!")
    })
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL, "PROCESS ENV REACT");
  }, []);

  return (
    <Container component="main"
              maxWidth="xs"
              sx={{
                height: '100vh',
                display: 'flex',
                jsutifyContent: 'center',
                alignItems: 'center',
    }}>

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

    </Container>
  )

}

export default Login;