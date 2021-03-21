import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';

const useStyles = makeStyles(theme => ({
  clusterName: { 
    padding: theme.spacing(1,2,1),
    maringTop: theme.spacing(1)
  },
  indivGrid: { 
    marginBottom: theme.spacing(2)
  }
}));


const MainDashboard: React.FC = () => {

  const { uiState, appStore } = useStores(); 

  return (
    <Grid container direction="column">
      <FirstRow/>
      <SecondRow/>
    </Grid>
  );
};

export default observer(MainDashboard);