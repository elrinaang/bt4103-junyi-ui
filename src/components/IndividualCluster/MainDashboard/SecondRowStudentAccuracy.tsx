import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';

function createData(name: string, score: string) {
    return { name, score };
}
  
const rows = [
    createData('Jane Lim', '85.3%'),
    createData('Marcus Tan', '77%'),
    createData('Dominic Lee', '98%'),
    createData('Jane Lim', '85.3%'),
    createData('Marcus Tan', '77%'),
    createData('Dominic Lee', '98%'),
    createData('Jane Lim', '85.3%'),
    createData('Marcus Tan', '77%'),
];

const useStyles = makeStyles(theme => ({
    root: { 
        padding: theme.spacing(0,2,0),
        width: '100%',
        height: '100%v '
    },
    headerName: { 
        marginLeft: theme.spacing(2),
        paddingTop: theme.spacing(3)
    },
    container: {
        maxHeight: 440,
      },
}));


const SecondRowStudentAccuarcy: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
        <h2 className={classes.headerName}>Individual Student Scores</h2>
        <TableContainer>
            <Table>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        <b>{row.name}</b>
                    </TableCell>
                    <TableCell align="right"><b>{row.score}</b></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  );
};

export default observer(SecondRowStudentAccuarcy);