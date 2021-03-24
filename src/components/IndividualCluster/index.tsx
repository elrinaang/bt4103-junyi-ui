import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStores } from '../../stores/StoreProvider';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import redirect from '../../lib/redirect';
import MainDashboard from './MainDashboard';

const useStyles = makeStyles(theme => ({
  clusterName: { 
    padding: theme.spacing(0.25,2,0.25),
    maringTop: theme.spacing(1),
    //backgroundColor: theme.palette.info.main,
    //color: 'white'
  },
  indivGrid: { 
    marginBottom: theme.spacing(2)
  },
  nameHeader: { 
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  }
}));


const IndividualCluster: React.FC = () => {

    //FOR DEV PURPOSES 
    React.useEffect(() => { uiState.setCurrentCluster('Cluster 1')}, []);
    

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentCluster = uiState.currentCluster; 

  return (
    <Grid direction="column" spacing={2}>
        <Grid item className={classes.indivGrid}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => redirect('/home')}
            size="large"
          >
            Back
          </Button>
        </Grid>
        <Grid item className={classes.indivGrid}>
          <Paper elevation={0} className={classes.clusterName}>
            <h1>{currentCluster}</h1>
          </Paper>
        </Grid>
        <Grid item>
          <MainDashboard/>
        </Grid>
    </Grid>
  );
};

export default observer(IndividualCluster); 