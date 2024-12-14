import { Button, Grid, Typography } from "@mui/material"
import { Navigate, useNavigate } from "react-router";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const PageHeader:React.FC = () => {
    const navigate = useNavigate();
    return(
        <Grid>
            <Grid item>
                <Typography variant="h3" component="h3" gutterBottom>
                    Usuário Cadastrado
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    sx={{ mt: { xs: 2, md: 0} }}    
                    variant="contained"
                    onClick={() => navigate("/management")}
                    startIcon={<AddTwoToneIcon fontSize="small" />}
                >
                    Cadastrar Usuário
                </Button>
            </Grid>
        </Grid>
    );
}

export default PageHeader;