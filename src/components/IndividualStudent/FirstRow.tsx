import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  root:{ 
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  indivStat: { 
    textAlign: 'center',
    padding: theme.spacing(2,0,2)
  },
  text: { 
    color: theme.palette.info.main
  }
}));

const getAccuracyasPercentage = (rawNumber: number) => { 
  const percent = rawNumber * 100; 
  return Math.round(percent * 100)/100; 
}


const FirstRow: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;
  
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={6}>
        <Paper elevation={0} className={classes.indivStat}>
          <Typography variant="h3" className={classes.text}>{`${getAccuracyasPercentage(currentStudent.avg_accuracy)}%`}</Typography>  
          <Typography variant="subtitle1" color="secondary"><b>Average Accuarcy</b></Typography>
        </Paper>
      </Grid> 
      <Grid item xs={3}> 
        <Paper elevation={0} className={classes.indivStat}>
          <Typography variant="h3" className={classes.text}>{currentStudent.exercises_attempted}</Typography>  
          <Typography variant="subtitle1" color="secondary"><b>No.of Exercises Attempted</b></Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={0} className={classes.indivStat}>
          <Typography variant="h3" className={classes.text}>{currentStudent.problems_attempted}</Typography>  
          <Typography variant="subtitle1" color="secondary"><b>No.of Problems Attempted</b></Typography>
        </Paper>
      </Grid> 
    </Grid>
  );
};

export default observer(FirstRow); 