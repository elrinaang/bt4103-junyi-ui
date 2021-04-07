import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStores } from '../../stores/StoreProvider';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from '@material-ui/core/Link';
import { observer } from 'mobx-react';
import MainDashboard from './MainDashboard';
import redirect from '../../lib/redirect';

const useStyles = makeStyles(theme => ({
  clusterName: { 
    padding: theme.spacing(0.25,2,0.25),
    marginTop: theme.spacing(1),
  },
  indivGrid: { 
    marginBottom: theme.spacing(2)
  },
  nameHeader: { 
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
  root:{ 
    padding: theme.spacing(5)
  }
}));

const IndividualCluster: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentClusterName = uiState.currentCluster && uiState.currentCluster.paths[0].cluster; 

  React.useEffect(() => !uiState.currentCluster && redirect('/groupList'),[]);

  return (
    <Grid container direction="column" spacing={2} className={classes.root}>
      {
        uiState.currentCluster 
        ?
        <>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link color="inherit" href="/groupList">Group List</Link>
          <Typography color="textPrimary">{`Cluster ${currentClusterName}`}</Typography>
        </Breadcrumbs>
        <h1>{`Cluster ${currentClusterName}`}</h1>
        <Grid item>
          <MainDashboard/>
        </Grid>
        </>
        :
        <h3>Redirecting back to group list...</h3>
      }
    </Grid>
  );
};

export default observer(IndividualCluster); 