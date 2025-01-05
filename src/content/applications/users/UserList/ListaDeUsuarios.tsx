import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import { Usuario } from 'src/models/usuarios';
import RecentOrdersTable from './UsuarioTabela';
import { subDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { Carro } from '../../../../models/carros';
import CarroService from '../../../../services/CarroService';
import UsuarioService from '../../../../services/UsuarioService';
import UsuarioTabela from './UsuarioTabela';

function ListaDeUsuarios() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const usuarioService = new UsuarioService();

  useEffect(() => {
    usuarioService.getAllUsuario().then((response) => {
      // console.log(response.data, 'DADOS DA BASE')
      setUsuarios(response.data);

    })
  }, []);

  return (
    <Card>
      <UsuarioTabela usuarios = {usuarios} />
    </Card>
  );
}

export default ListaDeUsuarios;
