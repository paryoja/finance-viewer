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
import { Transfer } from 'src/models/bank';

interface TransferListProps {
    className?: string;
    transferData: Transfer;
}

const TransferList: FC<TransferListProps> = ({ transferData }) => {
    const transferList = [...transferData.withdraws.map((transfer) => { return { ...transfer, type: 'withdraw', compositId: transfer.id + 'w' } }),
    ...transferData.deposits.map((transfer) => { return { ...transfer, type: 'deposit', compositId: transfer.id + 'd' } })]
    console.log(transferList)
    const sortedTransferList = transferList.sort((a, b) => b.datetime > a.datetime ? -1 : (b.datetime < a.datetime ? 1 : 0))
    return (
        <>
            <Card>
                <CardHeader title="Transfer" />
                <Divider />
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    ID
                                </TableCell>
                                <TableCell>
                                    계좌번호
                                </TableCell>
                                <TableCell>
                                    입금액
                                </TableCell>
                                <TableCell>
                                    출금액
                                </TableCell>
                                <TableCell>
                                    시간
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedTransferList.map((account) => {
                                let amount;
                                if (account.type === "withdraw") {
                                    amount = <><TableCell></TableCell><TableCell>
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
                                    </>
                                }
                                else {
                                    amount = <><TableCell>
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
                                        <TableCell></TableCell>
                                    </>
                                }
                                return (
                                    <TableRow key={account.compositId}>
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
                                                {account.id}
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
                                                {account.account.name}
                                            </Typography>
                                        </TableCell>
                                        {amount}
                                        <TableCell>
                                            <Typography
                                                variant="body1"
                                                fontWeight="bold"
                                                color="text.primary"
                                                gutterBottom
                                                noWrap
                                            >
                                                <Moment format="yy-MM-DD HH:mm:ss">{account.datetime}</Moment>
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

TransferList.propTypes = {
    transferData: PropTypes.object.isRequired
};

export default TransferList;