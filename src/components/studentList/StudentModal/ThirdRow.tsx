import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  root:{
    padding: theme.spacing(0,5,0)
  },
  indivStat: {
    textAlign: 'center',
    padding: theme.spacing(2,0,2)
  }
}));


const ThirdRow: React.FC = () => {

  const { uiState, appStore } = useStores();
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;

  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={4}>
        <Paper elevation={0} className={classes.indivStat}>
          <Typography variant="h3">{Math.round((+currentStudent.avg_hint_per_attempt + Number.EPSILON) * 100) / 100}</Typography>
          <Typography variant="subtitle1">Average Number of Hints Used</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={0} className={classes.indivStat}>
          <Typography variant="h3">{currentStudent.no_upgrades}</Typography>
          <Typography variant="subtitle1">No.of Upgrades</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={0} className={classes.indivStat}>
          <Typography variant="h3">{currentStudent.no_downgrades}</Typography>
          <Typography variant="subtitle1">No.of Downgrades</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default observer(ThirdRow);
