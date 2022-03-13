import { Card } from '@mui/material';
import { TRANSFER } from 'src/hooks/bank';
import TransferList from './TransferList';
import { useQuery } from '@apollo/client';

function RecentOrders() {
    const { loading, error, data } = useQuery(TRANSFER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    return (
        <>
            <Card>
                <TransferList transferData={data} />
            </Card>
        </>
    );
}

export default RecentOrders;
