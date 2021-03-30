import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import SecondRowLearningPath from './SecondRowLearningPath';
import SecondRowStudentAccuarcy from './SecondRowStudentAccuracy';
import SecondRowStudentPieChart from './SecondRowStudentPieChart';

const SecondRow: React.FC = () => {

  return (
      <Grid container direction="row" spacing={1}>
        <Grid item xs={6} xl={3}>
          <SecondRowStudentAccuarcy/>
        </Grid>
        <Grid item xs={6} xl={3}>
          <SecondRowStudentPieChart/>
        </Grid>
        <Grid item xs={12} xl={6}>
          <SecondRowLearningPath/>
        </Grid> 
      </Grid>
  );
};

export default observer(SecondRow);