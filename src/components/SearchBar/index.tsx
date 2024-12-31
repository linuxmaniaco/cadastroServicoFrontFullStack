import { Button, styled, TextField } from '@mui/material';
import { useState } from 'react';
import CarroService from '../../services/CarroService';

const SearchContainer = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 2px;
    padding: 10px;
    width: 100%;
`;

const StyledTextField = styled(TextField)`
    width: 100%;
    max-width: 100px;
    margin: 0 10px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0, 0.1);
    transition: all 0.3s ease;
    
    .MuiImputBase-root {
        border-radius: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
;`

const ClearButton = styled(Button)`
    margin-left: 5px;
    background-color: #f55e53;
    color: white;

    &:hover {
        background-color: #d32f2f;
    }
;`

const SubmithButton = styled(Button)`
    margin-left: 5px;
    background-color: #2e5de8;
    color: white;

    &:hover {
        background-color: #1c33ff;
    }
;`


const SearchBar = ({setCarros}) => {
  const [formData, setFormData] = useState({
    modelo: "",
    ano: "",
    cor: ""
  })


  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData((prevState) => {
      return {...prevState, [name]: value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let carroService = new CarroService();
    carroService.search(formData).then((response) => {
      setCarros(response.data)
      console.log(response.data);
    })
    // handleClear()
  }

  const handleClear = () =>{
    const cleadFormData = {
      modelo: "",
      ano: "",
      cor: ""
    };
    setFormData(cleadFormData)
  }
  return (
      <SearchContainer>
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems:'center' }}>

              <StyledTextField
                label="Modelo"
                variant="outlined"
                name="modelo"
                onChange={handleChange}
                value={formData.modelo}
              >

              </StyledTextField>

              <StyledTextField
                label="Ano"
                variant="outlined"
                name="ano"
                onChange={handleChange}
                value={formData.ano}
              >

              </StyledTextField>

              <StyledTextField
                label="Cor"
                variant="outlined"
                name="cor"
                onChange={handleChange}
                value={formData.cor}
              >

              </StyledTextField>

            <ClearButton variant="contained" onClick={handleClear}>Limpar</ClearButton>
            <SubmithButton variant="contained" type="submit">Buscar</SubmithButton>
        </form>
      </SearchContainer>
  );
}

export  default SearchBar;