import { Button } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;
const CsvDownloader = () => {
  const downloadCsv = async () => {

    try {
      const response = await axios.get(`${apiURL}api/carros/export-cars`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'carros.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.log("Erro ao fazer o download do CSV", e)
    }
  }
  return (
    <>
        <Button sx={{mt: {sx:2, dm:0}}}
                variant="contained"
                onClick={downloadCsv}
                startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Export Carro para CSV
        </Button>
    </>
  )
}

export default CsvDownloader;