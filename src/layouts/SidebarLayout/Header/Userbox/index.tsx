import { useEffect, useRef, useState } from 'react';

import { NavLink } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography
} from '@mui/material';

import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import { useNavigate } from 'react-router';
import LoginService from '../../../../services/LoginService';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

function HeaderUserbox() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    nome: '',
    avatar: '',
    cargo: ''
  });

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  useEffect(() => {
    let loginService = new LoginService();
    loginService.getMyProfile().then(response => {
      // console.log(response.data)
      setUser(response.data)
    })
  }, []);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login")
  }

  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={user.nome} src={user.avatar} />
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.nome}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.cargo}
            </UserBoxDescription>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <Avatar variant="rounded" alt={user.nome} src={user.avatar} />
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.nome}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.cargo}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider sx={{ mb: 0 }} />
        <List sx={{ p: 2 }} component="nav">
          <ListItem button to="/applications/perfil" component={NavLink}>
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary="Meu perfil" />
          </ListItem>
          {/*<ListItem button to="/dashboards/messenger" component={NavLink}>*/}
          {/*  <InboxTwoToneIcon fontSize="small" />*/}
          {/*  <ListItemText primary="Messenger" />*/}
          {/*</ListItem>*/}
          {/*<ListItem*/}
          {/*  button*/}
          {/*  to="/applications/profile/settings"*/}
          {/*  component={NavLink}*/}
          {/*>*/}
          {/*  <AccountTreeTwoToneIcon fontSize="small" />*/}
          {/*  <ListItemText primary="Configuração de conta" />*/}
          {/*</ListItem>*/}
        </List>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button onClick={handleLogout} color="primary" fullWidth>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            SAIR
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;
