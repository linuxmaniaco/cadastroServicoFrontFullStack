import { Card, Grid } from '@mui/material';
import React from 'react';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import RecentOrdersTable from 'src/content/applications/users/UserList/UsuarioTabela';
import { CryptoOrder } from 'src/models/crypto_order';

function UsersList() {
    const cryptoOrders: CryptoOrder[] = [];
return (
    <> 

        <PageTitleWrapper>
            
            <Card > 
                {/* <p> TEste </p> */}
                {/* <RecentOrdersTable cryptoOrders={cryptoOrders} /> */}
            </Card>
            
        </PageTitleWrapper>

</>
);
}

export default UsersList;