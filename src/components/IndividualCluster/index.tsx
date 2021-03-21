import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  root:{ 
    padding: theme.spacing(0,5,3)
  },
  indivStat: { 
    backgroundColor: 'white'
  },
  nameHeader: { 
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  }
}));


const IndividualCluster: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentCluster = uiState.currentCluster; 
  
  return (
    <h1>{currentCluster}</h1>
  );
};

export default observer(IndividualCluster); 