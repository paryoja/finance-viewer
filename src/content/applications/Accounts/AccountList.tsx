import { FC } from 'react';
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
import { Account } from 'src/models/bank';

interface BankListProps {
    className?: string;
    accountList: Account[];
}

const BankList: FC<BankListProps> = ({ accountList }) => {
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
                                    계좌번호
                                </TableCell>
                                <TableCell>
                                    은행
                                </TableCell>
                                <TableCell>
                                    잔액
                                </TableCell>
                                <TableCell>
                                    마지막 업데이트
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {accountList.map((account) => {
                                return (
                                    <TableRow key={account.id}>
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
                                                {account.name}
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
                                                {account.bank.name}
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
                                                {account.amount.toLocaleString()}
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
                                                <Moment format="yy-MM-DD HH:mm:ss">{account.lastUpdated}</Moment>
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

BankList.propTypes = {
    accountList: PropTypes.array.isRequired
};

export default BankList;