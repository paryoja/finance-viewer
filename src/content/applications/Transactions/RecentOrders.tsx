import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import { ACCOUNTS } from 'src/hooks/bank';
import RecentOrdersTable from './RecentOrdersTable';
import BankList from './BankList';
import { gql, useQuery } from '@apollo/client';

function RecentOrders() {
  const { loading, error, data } = useQuery(ACCOUNTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data)

  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      orderDetails: 'Fiat Deposit',
      orderDate: new Date().getTime(),
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'ETH',
      currency: '$'
    }
  ];

  return (
    <>
      <Card>
        <RecentOrdersTable cryptoOrders={cryptoOrders} />
      </Card>
      <Card>
        <BankList accountList={data.accounts} />
      </Card>
    </>
  );
}

export default RecentOrders;
