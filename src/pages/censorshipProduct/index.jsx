import React from 'react';
import Dashboard from '../../components/common/Dashboard';
import Sidebar from '../../components/layouts/Sidebar';
import Tables from '../../components/Tables';
import TableCensorshipProduct from '../../components/Tables/TablecensorshipProduct';

function CensorshipProduct(props) {
    return (
        <Sidebar>
            <Dashboard >
                <Tables >
                    <TableCensorshipProduct />
                </Tables>
            </Dashboard>
        </Sidebar>
    );
}

export default CensorshipProduct;