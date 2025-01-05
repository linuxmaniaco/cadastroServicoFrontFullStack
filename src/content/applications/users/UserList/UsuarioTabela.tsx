import { FC, ChangeEvent, useState } from 'react';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader
} from '@mui/material';

import Label from 'src/components/Label';
import { CryptoOrder, CryptoOrderStatus } from 'src/models/crypto_order';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import { Usuario } from 'src/models/usuarios';

interface UsuarioTabelaProps {
  className?: string;
  usuarios: Usuario[];
}

interface Filters {
  status?: CryptoOrderStatus;
}


const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
  const map = {
    failed: {
      text: 'Falhou',
      color: 'error'
    },
    completed: {
      text: 'Completo',
      color: 'success'
    },
    pending: {
      text: 'Pendente',
      color: 'warning'
    }
  };

  const { text, color }: any = map[cryptoOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  usuarios: Usuario[],
  filters: Filters
): Usuario[] => {
  return usuarios.filter((usuarios) => {
    let matches = true;

    // if (filters.status && usuarios.status !== filters.status) {
    //   matches = false;
    // }

    return matches;
  });
};

// const applyPagination = (
//   usuarios: Usuario[],
//   page: number,
//   limit: number
// ): Usuario[] => {
//   return usuarios.slice(page * limit, page * limit + limit);
// };

const usuarioPaginacao = (
  usuarios: Usuario[],
  page: number,
  limit: number
): Usuario[] => {
  return usuarios.slice(page * limit, page * limit + limit);
};

const UsuarioTabela: FC<UsuarioTabelaProps> = ({ usuarios }) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  // const statusOptions = [
  //   {
  //     id: 'all',
  //     name: 'All'
  //   },
  //   {
  //     id: 'completed',
  //     name: 'Completed'
  //   },
  //   {
  //     id: 'pending',
  //     name: 'Pending'
  //   },
  //   {
  //     id: 'failed',
  //     name: 'Failed'
  //   }
  // ];

  // console.log(statusOptions);

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
      console.log('A saida do target é: ', e.target.value) //TESTANDO SAIDA DO e.target.value
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectAllCryptoOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCryptoOrders(
      event.target.checked
        ? usuarios.map((cryptoOrder) => cryptoOrder.id)
        : []
    );
  };

  const handleSelectOneCryptoOrder = (
    event: ChangeEvent<HTMLInputElement>,
    cryptoOrderId: string
  ): void => {
    if (!selectedCryptoOrders.includes(cryptoOrderId)) {
      setSelectedCryptoOrders((prevSelected) => [
        ...prevSelected,
        cryptoOrderId
      ]);
    } else {
      setSelectedCryptoOrders((prevSelected) =>
        prevSelected.filter((id) => id !== cryptoOrderId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(usuarios, filters);
  const paginatedListaUsuario = usuarioPaginacao(
    filteredCryptoOrders,
    page,
    limit
  );
  const selectedSomeCryptoOrders =
    selectedCryptoOrders.length > 0 &&
    selectedCryptoOrders.length < usuarios.length;
  const selectedAllCryptoOrders =
    selectedCryptoOrders.length === usuarios.length;
  const theme = useTheme();

  const [listaUsuarios, setListaUsuarios] = useState<Usuario[]>([])

  


  return (
    <Card>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Cargo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedListaUsuario.map((usuarios) => {
              const isCryptoOrderSelected = selectedCryptoOrders.includes(
                usuarios.id
              );
              return (
                <TableRow
                  hover
                  key={usuarios.id}
                  selected={isCryptoOrderSelected}
                >

                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {usuarios.id}
                    </Typography>
                  </TableCell>


                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {usuarios.email}
                    </Typography>
                  </TableCell>


                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {usuarios.nome}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {usuarios.cargo}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

UsuarioTabela.propTypes = {
  usuarios: PropTypes.array.isRequired
};

UsuarioTabela.defaultProps = {
  usuarios: []
};

export default UsuarioTabela;
