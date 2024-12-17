import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from './PageHeader';
import RecentOrders from '../users/RecentOrders';

// import RecentOrders from './RecentOrders';
// import UserForm from './UserForm';
// import RecentOrdersTable from './RecentOrdersTable';

function ApplicationsTransactions() {
  return (
    <>
      <Helmet>
        <title>Pagina de Carros</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            {/* <RecentOrders /> */}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ApplicationsTransactions;
