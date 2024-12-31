import React, { FC, ChangeEvent, useState, useEffect } from 'react';
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
  CardHeader, Modal, Button
} from '@mui/material';

import Label from 'src/components/Label';
import { CryptoOrder, CryptoOrderStatus } from 'src/models/crypto_order';
const carroService = new CarroService();
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import { Carro, TipoPais } from 'src/models/carros';
// import carroService from '../../../../services/CarroService/index';
import CarroService from "src/services/CarroService";
import DeleteConfirmation from '../../../../components/DeleteConfirmation';
import toast from 'react-hot-toast';
import CarroModal from './CarroModal';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import { useNavigate } from 'react-router';
import SearchBar from '../../../../components/SearchBar';
import logo from '../../../../components/Logo';
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

const CarroTabela: FC<CarroTableProps> = ({ carros }) => {

  const navigate = useNavigate();

  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );

  const toastSucess = () => toast.success("Carro deletado com sucesso");

  const toastError = () => toast.error("Erro ao deletar o carro");

  const [showProfile, setShowProfile] = useState(false);
  const [updateCarros, setUpdateCarros] = useState<Carro[]>([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    pais: null
  });
  const filteredCryptoOrders = applyFilters(updateCarros, filters);

  useEffect(() => {
    setUpdateCarros(carros); // Inicializa o estado com a prop 'carros'
  }, [carros]);

  const handleCloseProfile = () => {
    setShowProfile(false)
    console.log("Estou aqui");
  }
  const handleOpenProfile = (carro) => {
    setSelectedRow(carro)
    setShowProfile(true)
  }

  //
  const handleDelete = (carro: Carro) => {
    setSelectedRow(carro);
    setOpenDelete(true);
  };

  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseDelete = () =>{
    setOpenDelete(false)
  }

  const handleConfirmDelete = () => {

    carroService.delete(selectedRow.id).then(()=>{

      setUpdateCarros((prevCarros) =>
        prevCarros.filter((carro) => carro.id !== selectedRow.id),
      );
      toastSucess()
      setOpenDelete(false)
    }).catch((error) =>{
      setOpenDelete(false)
      toastError()
    });

  }

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



  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;
    if (e.target.value !== 'todos') {
      value = e.target.value;
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

  const openEditCar = (carro)=>{
    console.log(carro.id);
    navigate(`/management/editCar/${carro.id}`)
  }

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };


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
          <SearchBar setCarros={setUpdateCarros}/>
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
                {paginatedCryptoOrders.map((carro) => {
                  const isCryptoOrderSelected = selectedCryptoOrders.includes(
                    carro.id
                  );
                  return (
                    <TableRow
                      hover
                      key={carro.id}
                      selected={isCryptoOrderSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isCryptoOrderSelected}
                          onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            handleSelectOneCryptoOrder(event, carro.id)
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
                          {carro.modelo}
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
                          {carro.ano}
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
                          {carro.cor}
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
                          {carro.cavalosDePotencia + ' Cavalos'}
                          {/*{cryptoOrder.cryptoCurrency}*/}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" noWrap>
                          {/*{numeral(cryptoOrder.amount).format(*/}
                          {/*  `${cryptoOrder.currency}0,0.00`*/}
                          {/*)}*/}
                        </Typography>
                      </TableCell>


                      <TableCell align="right">
                         {carro.fabricante}
                      </TableCell>

                      <TableCell align="right">
                        {carro.pais}
                        <p>{}</p>
                      </TableCell>


                      <TableCell align="right">
                        <Tooltip title="Exibir Carro" arrow>
                          <IconButton
                            onClick={() => handleOpenProfile(carro)}
                            sx={{
                              '&:hover': {
                                background: theme.colors.primary.lighter
                              },
                              color: theme.palette.primary.main
                            }}
                            color="inherit"
                            size="small"
                          >
                            <PlagiarismIcon fontSize="small" />
                          </IconButton>

                        </Tooltip>
                        <Tooltip title="Editar Carro" arrow>
                          <IconButton
                            onClick={() => openEditCar(carro)}
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
                        <Tooltip title="Deletar carro" arrow>
                          <IconButton
                            onClick={()=> handleDelete(carro)}
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
            <Modal open={open} onClose={handleClose} >
              <Box>
                <Typography>
                  Teste
                </Typography>
                <Button variant="contained" onClick={handleClose}/>
              </Box>
            </Modal>
          </Box>

          <DeleteConfirmation
            open={openDelete}
            onClose={handleCloseDelete}
            onConfirm={handleConfirmDelete}
          />
          {showProfile && <CarroModal carro={selectedRow} onClose={handleCloseProfile}></CarroModal>}
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
