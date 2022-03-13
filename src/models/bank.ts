import { DateTimePickerView } from "@mui/lab/DateTimePicker/shared";

export interface Bank {
    id: string;
    name: string;
}

export interface Account {
    id: string;
    name: string;
    bank: Bank;
    amount: number;
    lastUpdated: Date;
}

export interface Transactions {
    id: string;
    accountFrom: Account;
    accountTo: Account;
    amount: number;
    datetime: Date;
}

export interface Withdraw {
    id: string;
    account: Account;
    amount: number;
    datetime: Date;
}

export interface Deposit {
    id: string;
    account: Account;
    amount: number;
    datetime: Date;
}
export interface Transfer {
    withdraws?: Withdraw[];
    deposits?: Deposit[];
}