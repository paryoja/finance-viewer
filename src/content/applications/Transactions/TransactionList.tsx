import { FC, useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {
    Tooltip,
    Divider,
    Box,
    FormControl,
    InputLabel,
    Card,
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableContainer,
    Select,
    MenuItem,
    Typography,
    useTheme,
    CardHeader
} from '@mui/material';
import { Transactions } from 'src/models/bank';

interface TransactionListProps {
    className?: string;
    transactionList: Transactions[];
}

const TransactionList: FC<TransactionListProps> = ({ transactionList }) => {
    const [filters, setFilters] = useState({
        status: null
    });
    return (
        <>
            <Card>
                <CardHeader title="Accounts" />
                <Divider />
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    출금 계좌번호
                                </TableCell>
                                <TableCell>
                                    입금 계좌번호
                                </TableCell>
                                <TableCell>
                                    잔액
                                </TableCell>
                                <TableCell>
                                    이체시간
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactionList.map((transaction) => {
                                return (
                                    <TableRow key={transaction.id}>
                                        <TableCell padding="checkbox">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                color="text.primary"
                                                gutterBottom
                                                noWrap
                                            >
                                                {transaction.accountFrom.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                color="text.primary"
                                                gutterBottom
                                                noWrap
                                            >
                                                {transaction.accountTo.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                color="text.primary"
                                                gutterBottom
                                                noWrap
                                            >
                                                {transaction.amount.toLocaleString()}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                color="text.primary"
                                                gutterBottom
                                                noWrap
                                            >
                                                <Moment format="yy-MM-DD HH:mm:ss">{transaction.datetime}</Moment>
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </>
    )
}

TransactionList.propTypes = {
    transactionList: PropTypes.array.isRequired
};

export default TransactionList;