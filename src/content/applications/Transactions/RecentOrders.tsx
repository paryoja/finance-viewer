import { Card } from '@mui/material';
import { TRANSACTIONS } from 'src/hooks/bank';
import TransactionList from './TransactionList';
import { useQuery } from '@apollo/client';

function RecentOrders() {
  const { loading, error, data } = useQuery(TRANSACTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Card>
        <TransactionList transactionList={data.transactions} />
      </Card>
    </>
  );
}

export default RecentOrders;
