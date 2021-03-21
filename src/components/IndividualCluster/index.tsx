import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStores } from '../../stores/StoreProvider';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
import redirect from '../../lib/redirect';

const useStyles = makeStyles(theme => ({
  clusterName: { 
    padding: theme.spacing(1,2,1),
    maringTop: theme.spacing(1)
  },
  indivGrid: { 
    marginBottom: theme.spacing(2)
  }
}));


const IndividualCluster: React.FC = () => {

    //FOR DEV PURPOSES 
    React.useEffect(() => { uiState.setCurrentCluster('Test Group 1')}, []);
    

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentCluster = uiState.currentCluster; 

  return (
    <Grid direction="column" spacing={2}>
        <Grid item className={classes.indivGrid}>
            <Button
                variant="outlined"
                color="primary"
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
            <h1>Main dashboard layout</h1>
        </Grid>
    </Grid>
  );
};

export default observer(IndividualCluster); 