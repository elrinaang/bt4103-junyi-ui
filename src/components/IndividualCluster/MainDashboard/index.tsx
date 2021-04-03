import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import GroupComparison from './GroupComparison';

const MainDashboard: React.FC = () => {

  const { uiState, appStore } = useStores(); 

  return (
    <Grid container direction="column">
      <FirstRow/>
      <GroupComparison/>
      <SecondRow/>
    </Grid>
  );
};

export default observer(MainDashboard);