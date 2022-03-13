import { ReactNode } from 'react';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Overview',
        link: '/overview',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: 'Management',
    items: [
      {
        name: 'Accounts',
        icon: AccountBalanceTwoToneIcon,
        link: '/management/accounts'
      },
      {
        name: 'Self Transactions',
        icon: TableChartTwoToneIcon,
        link: '/management/transactions'
      },
      {
        name: 'Transfer',
        icon: AccountBalanceWalletTwoToneIcon,
        link: '/management/transfer'
      }
    ]
  }
];

export default menuItems;
