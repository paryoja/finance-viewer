import { Card } from '@mui/material';
import { ACCOUNTS } from 'src/hooks/bank';
import AccountList from './AccountList';
import { useQuery } from '@apollo/client';

function RecentOrders() {
    const { loading, error, data } = useQuery(ACCOUNTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <Card>
                <AccountList accountList={data.accounts} />
            </Card>
        </>
    );
}

export default RecentOrders;
