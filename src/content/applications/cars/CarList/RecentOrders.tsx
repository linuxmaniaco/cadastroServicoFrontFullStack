import { Card } from '@mui/material';
import CarroTabela from './CarroTabela';
import { useEffect, useState } from 'react';
import CarroService from '../../../../services/CarroService';
import { Carro } from '../../../../models/carros';

function RecentOrders() {

const [carros, setCarros] = useState<Carro[]>([]);
const carroService = new CarroService();

  useEffect(() => {
    carroService.getAllCarros().then((response) => {
      // console.log(response.data, 'DADOS DA BASE')
      setCarros(response.data);

    })
  }, []);

  return (
    <Card>
      <CarroTabela carros ={carros} />
    </Card>
  );
}

export default RecentOrders;
