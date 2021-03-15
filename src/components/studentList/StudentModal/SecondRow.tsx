import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { useStores } from '../../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  root:{ 
    padding: theme.spacing(0,5,0),
    marginBottom: theme.spacing(2)
  },
  indivStat: { 
    textAlign: 'center',
    padding: theme.spacing(2,0,2)
  },
  text: { 
    color: theme.palette.info.main
  },
  header: { 
    color: theme.palette.primary.main,
    padding: theme.spacing(1,2,1)
  },
  headerContainer: { 
    marginBottom: theme.spacing(1)
  }
}));

const getTimeAsMins = (seconds: number) => { 
  return Math.floor(seconds / 60);
}

const SecondRow: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;
  
  return (
    <Grid container direction="column" className={classes.root}> 
      <Grid item xs={12} className={classes.headerContainer}>
        <Paper elevation={0} className={classes.header}>
          <Typography variant="h6"><b>Average time taken:</b></Typography>
        </Paper>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={6}>
        <Paper elevation={0} className={classes.indivStat}>
          <Typography variant="h3" className={classes.text}>{`${getTimeAsMins(currentStudent.avg_time_per_exercise)} mins`}</Typography>  
          <Typography variant="subtitle1" color="secondary"><b>to Solve Each Problem</b></Typography>
        </Paper>
        </Grid> 
        <Grid item xs={6}>
          <Paper elevation={0} className={classes.indivStat}>
            <Typography variant="h3" className={classes.text}>{`${getTimeAsMins(currentStudent.avg_time_btw_problem)} mins`}</Typography>  
            <Typography variant="subtitle1" color="secondary"><b>between Each Exercise</b></Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default observer(SecondRow); 