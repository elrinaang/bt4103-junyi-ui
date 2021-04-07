import * as React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useStores } from '../../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';
import PredictedAverageAccuracy from './PredictedAverageAccuracy';
import DemographicData from './DemographicData';

const useStyles = makeStyles(theme => ({
  root:{ 
    marginBottom: theme.spacing(1),
  },
  indivStat: { 
    textAlign: 'center',
    padding: theme.spacing(2,0,2)
  },
  text: { 
    color: theme.palette.info.main
  },
}));

const CurrentStatistics: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={6}>
        <Paper style={{height: '100%'}} square>
          <DemographicData/>
        </Paper>
      </Grid> 
      <Grid item xs={6}>
        <Paper style={{height: '100%'}} square>
          <PredictedAverageAccuracy/>
        </Paper>
      </Grid> 
    </Grid>
  );
};

export default observer(CurrentStatistics); 