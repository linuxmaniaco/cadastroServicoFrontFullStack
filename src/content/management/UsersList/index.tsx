import { Card, Grid } from '@mui/material';
import React from 'react';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import RecentOrdersTable from 'src/content/applications/users/RecentOrdersTable';
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