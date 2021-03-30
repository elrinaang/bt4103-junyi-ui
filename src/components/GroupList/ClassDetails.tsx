import * as React from 'react';
import { makeStyles, lighten } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import { IndivGroup } from '../../stores/AppStore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import redirect from '../../lib/redirect';
import CardActionArea from '@material-ui/core/CardActionArea';
import { ClusterType, PathType, StudentType } from '../../lib/Types';
import { testCluster } from '../../lib/DevVariables';

const useStyles = makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(2),
    minWidth: '100%'
  },
  root: {
    minWidth: 180,
    maxWidth: '70%',
    //backgroundColor:'#cefaaa',
    padding: theme.spacing(1,0,1),
    marginTop: theme.spacing(1),
    '&:hover': {
      background: lighten(theme.palette.info.main,0.35),
      padding: theme.spacing(1,0,1)
    }
  },
  cards:{
    marginTop: theme.spacing(2)
  },
  cardContent: { 
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center'
  },
  indivGroup: { 
    marginBottom: theme.spacing(4)
  },
}));

const clusters = ['cluster 1', 'cluster 2', 'cluster 3', 'cluster 4', 'cluster 5'];

const ClassDetails: React.FC = () => {

  const classes = useStyles();
  const { appStore, uiState } = useStores();

  const handleClick = async (clusterName: string, groupID: number) => { 
    //uiState.setCurrentCluster(clusterName);
    /**
     * Todo: 
     *  1. Extract out the cluster number from the cluster name 
     *  2. Call a getCluser using the group ID and cluster ID 
     *  3. Set current cluster from the cluster retrieved 
     */
    const clusterID = clusterName.split(" ")[1];
    // const newCluster = getCluster(groupID, clusterID);
    //uiState.setCurrentCluster(newCluster);

    //DEV Purposes 
    uiState.setCurrentCluster(testCluster);
    redirect(`/cluster?name=${clusterName}`);
  }

  return (
    <React.Fragment>
      {
        appStore.groupList.map((newGroup: IndivGroup) =>
        <div className={classes.indivGroup} key={newGroup.id}>
          <Typography variant="h6"><b>{newGroup.name}</b></Typography>
          <Grid container direction="row" spacing={5}> 
          {
            clusters.map((cluster: string) => 
              <Grid item xs={2} xl={2} key={cluster}>
                <Card 
                  className={classes.root} 
                  square 
                  variant="outlined"
                >
                  <CardActionArea onClick={() => handleClick(cluster,newGroup.id)}>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h6">
                        {cluster}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
          )}
          </Grid>
        </div>) 
        }
    </React.Fragment>
  );
};

export default observer(ClassDetails); 