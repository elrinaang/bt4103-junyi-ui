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
import { getGroupCluster } from "../../api/groupService";
import { ClusterInformationType } from '../../lib/Types';


const useStyles = makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(2),
    minWidth: '100%'
  },
  root:{ 
    paddingLeft: theme.spacing(3)
  },
  indivCard: {
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

//const clusters = ['cluster 1', 'cluster 2', 'cluster 3', 'cluster 4', 'cluster 5'];

const ClassDetails: React.FC = () => {

  const classes = useStyles();
  const { appStore, uiState } = useStores();
  const clusters = appStore.listOfClusters;

  const filteredGroupList = appStore.groupList?.filter(group => group.name == uiState.currentGroup);

  const handleClick = async(clusterID: string, clusterName: string, groupID: number) => {
    /**
     * Todo: COMMENT OUT FOR DEV PURPOSES AND UNCOMMENT THE REST
     *  1. Extract out the cluster number from the cluster name
     *  2. Call a getCluser using the group ID and cluster ID
     *  3. Set current cluster from the cluster retrieved
     */
    //UNCOMMENT FOR CONNECTION WITH BE 
    //const clusterID = clusterName.split(" ")[1];
    console.log(groupID);
    const newCluster: ClusterType = await getGroupCluster(groupID.toString(), clusterID);
    uiState.setCurrentCluster(newCluster);
    uiState.currentClusterName = clusterName; 
    uiState.currentGroupID = groupID.toString();
    redirect(`/cluster?name=${clusterID}`);
  }

  return (
    <div className={classes.root}>
      {
        filteredGroupList.map((newGroup: IndivGroup) =>
        <div className={classes.indivGroup} key={newGroup.id}>
          <Typography variant="h6"><b>{newGroup.name}</b></Typography>
          <Grid container direction="row" spacing={5}>
          {
            clusters?.map((cluster: ClusterInformationType) =>
              <Grid item xs={2} xl={2} key={cluster.id}>
                <Card
                  className={classes.indivCard}
                  square
                  variant="outlined"
                  style={{height: '100%'}}
                >
                  <CardActionArea onClick={() => handleClick(cluster.id,cluster.name,newGroup.id)}>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h6">
                        {cluster.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
          )}
          </Grid>
        </div>)
        }
    </div>
  );
};

export default observer(ClassDetails);
