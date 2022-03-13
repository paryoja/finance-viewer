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
}`;

export const TRANSACTIONS = gql`
query transactions {
  transactions {
    id
    accountTo {
      id
      name
    }
    accountFrom {
      id
      name
    }
    amount
    datetime    
  }
}`;

export const TRANSFER = gql`
query transfer {
  withdraws {
    id
    account {
      id
      name
    }
    amount
    datetime
  }
  deposits {
    id
    account {
      id
      name
    }
    amount
    datetime
  }
}`;
