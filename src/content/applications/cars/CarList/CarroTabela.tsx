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
import { Carro, TipoPais } from 'src/models/carros';
import carroService from '../../../../services/CarroService';

// import { Carro } from 'src/models/usuarios';

interface RecentOrdersTableProps {
  className?: string;
  carros: Carro[];
}

interface Filters {
  pais?: TipoPais;
}

interface CarroTableProps {
  className?: string;
  carros: Carro[];

}

// const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
//   const map = {
//     failed: {
//       text: 'Falhou',
//       color: 'error'
//     },
//     completed: {
//       text: 'Completo',
//       color: 'success'
//     },
//     pending: {
//       text: 'Pendente',
//       color: 'warning'
//     }
//   };

//   const { text, color }: any = map[cryptoOrderStatus];

//   return <Label color={color}>{text}</Label>;
// };

const applyFilters = (
  // cryptoOrders: CryptoOrder[],
  carros: Carro[],
  filters: Filters
): Carro[] => {
  return carros.filter((carros) => {
    let matches = true;

    if (filters.pais && carros.pais !== filters.pais) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  // cryptoOrders: CryptoOrder[],
  carros: Carro[],
  page: number,
  limit: number
): Carro[] => {
  return carros.slice(page * limit, page * limit + limit);
};

const carroPaginacao = (
  carros: Carro[],
  page: number,
  limit: number
): Carro[] => {
  return carros.slice(page * limit, page * limit + limit);
};

// const CarroTabela: FC<RecentOrdersTableProps> = ({ carro }) => {
const CarroTabela: FC<CarroTableProps> = ({ carros }) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    pais: null
  });

  const statusOptions = [
    {
      id: 'todos',
      name: 'Todos'
    },
    {
      id: 'alemanha',
      name: 'Alemanha'
    },
    {
      id: 'coreiadosul',
      name: 'Coreia do Sul'
    },
    {
      id: 'eua',
      name: 'EUA'
    },
    {
      id: 'franca',
      name: 'França'
    },
    {
      id: 'itália',
      name: 'Itália'
    },
    {
      id: 'japao',
      name: 'Japão'
    },
    {
      id: 'reinounido',
      name: 'Reino Unido'
    },
    {
      id: 'suecia',
      name: 'Suécia'
    }
  ];

  console.log(statusOptions);

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;
    if (e.target.value !== 'todos') {
      value = e.target.value;
      console.log('A saida do target é: ', e.target.value) //TESTANDO SAIDA DO e.target.value
    }


    setFilters((prevFilters) => ({
      ...prevFilters,
      pais: value,

    }));
  };

  const handleSelectAllCryptoOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCryptoOrders(
      event.target.checked
        ? carros.map((carro) => carro.id)
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

  const filteredCryptoOrders = applyFilters(carros, filters);
  const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  );
  const selectedSomeCryptoOrders =
    selectedCryptoOrders.length > 0 &&
    selectedCryptoOrders.length < carros.length;
  const selectedAllCryptoOrders =
    selectedCryptoOrders.length === carros.length;
  const theme = useTheme();

  // const [listaUsuarios, setListaUsuarios] = useState<Usuario[]>([])

  


  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>País</InputLabel>
                <Select
                  value={filters.pais || 'todos'}
                  onChange={handleStatusChange}
                  label="País"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="Lista de carros"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllCryptoOrders}
                  indeterminate={selectedSomeCryptoOrders}
                  onChange={handleSelectAllCryptoOrders}
                />
              </TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Ano</TableCell>
              <TableCell>Cor</TableCell>
              <TableCell align="right">Potência</TableCell>
              <TableCell align="right">Fabricante</TableCell>
              <TableCell align="right">País</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*{paginatedCryptoOrders.map((cryptoOrder) => {*/}
            {paginatedCryptoOrders.map((cryptoOrder) => {
              const isCryptoOrderSelected = selectedCryptoOrders.includes(
                cryptoOrder.id
              );
              return (
                <TableRow
                  hover
                  key={cryptoOrder.id}
                  selected={isCryptoOrderSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isCryptoOrderSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneCryptoOrder(event, cryptoOrder.id)
                      }
                      value={isCryptoOrderSelected}
                    />
                  </TableCell>


                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.modelo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {/*{format(cryptoOrder.orderDate, 'MMMM dd yyyy')}*/}
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
                      {cryptoOrder.ano}
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
                      {cryptoOrder.cor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {/*{cryptoOrder.sourceDesc}*/}
                    </Typography>
                  </TableCell>


                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.cavalosDePotencia + ' Cavalos'}
                      {/*{cryptoOrder.cryptoCurrency}*/}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {/*{numeral(cryptoOrder.amount).format(*/}
                      {/*  `${cryptoOrder.currency}0,0.00`*/}
                      {/*)}*/}
                    </Typography>
                  </TableCell>


                  <TableCell align="right">
                     {cryptoOrder.fabricante}
                  </TableCell>

                  <TableCell align="right">
                    {cryptoOrder.pais}
                    <p>{}</p>
                  </TableCell>


                  <TableCell align="right">
                    <Tooltip title="Edit Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
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
          labelRowsPerPage="Linhas por página:"
        />
      </Box>
    </Card>
  );
};

CarroTabela.propTypes = {
  carros: PropTypes.array.isRequired
};

CarroTabela.defaultProps = {
  carros: []
};

export default CarroTabela;
