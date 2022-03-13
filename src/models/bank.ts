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