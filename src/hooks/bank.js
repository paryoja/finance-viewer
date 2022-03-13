import { gql } from '@apollo/client';

export default function useBank() {
    const getBanks = () => {

    }
}

export const ACCOUNTS = gql`
query accounts {
  accounts {
    id
    name
    amount
    lastUpdated
    bank {
      id
      name
    }
  }
}
`;