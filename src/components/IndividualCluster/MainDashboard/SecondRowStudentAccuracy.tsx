import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import { StudentType } from '../../../lib/Types';

const useStyles = makeStyles(theme => ({
    root: { 
        padding: theme.spacing(0,2,0),
        width: '100%',
        height: '100%'
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
  const currentCluster = uiState.currentCluster;
  const weakStudents = currentCluster.prediction.weak;
  const normalStudents = currentCluster.prediction.normal;
  const strongStudents = currentCluster.prediction.strong;
  const students = weakStudents.concat(normalStudents).concat(strongStudents);

  return (
    <Paper elevation={0} className={classes.root}>
        <h2 className={classes.headerName}>Individual Student Scores</h2>
        <TableContainer style={{maxHeight: 400}}>
            <Table>
                <TableBody>
                {students.map((student: StudentType) => (
                    <TableRow key={student.name}>
                        <TableCell component="th" scope="row">
                            <b>{student.name}</b>
                        </TableCell>
                        <TableCell align="right"><b>{student.accuracy}</b></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  );
};

export default observer(SecondRowStudentAccuarcy);