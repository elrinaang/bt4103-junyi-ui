import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  root:{ 
    padding: theme.spacing(0,5,0),
    marginBottom: theme.spacing(1)
  },
  indivStat: { 
    textAlign: 'center',
    padding: theme.spacing(2,0,2)
  }
}));


const FirstRow: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;
  
  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={6}>
        <Paper elevation={0} className={classes.indivStat}>
          <Typography variant="h3">85.5%</Typography>  
          <Typography variant="subtitle1">Average Accuarcy</Typography>
        </Paper>
      </Grid> 
      <Grid item xs={3}> 
        <Paper elevation={0} className={classes.indivStat}>
          <Typography variant="h3">16</Typography>  
          <Typography variant="subtitle1">No.of Exercises</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={0} className={classes.indivStat}>
          <Typography variant="h3">54</Typography>  
          <Typography variant="subtitle1">No.of Problems</Typography>
        </Paper>
      </Grid> 
    </Grid>
  );
};

export default observer(FirstRow); 