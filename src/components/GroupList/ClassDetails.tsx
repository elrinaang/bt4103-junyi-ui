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
import clsx from 'clsx'; 


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
  card0: { 
    '&:hover': {
      background: lighten('#ec9455',0.45),
      padding: theme.spacing(1,0,1)
    }
  },
  card1: { 
    '&:hover': {
      background: lighten('#91e755',0.45),
      padding: theme.spacing(1,0,1)
    }
  },
  card2: { 
    '&:hover': {
      background: lighten('#31e6c7',0.45),
      padding: theme.spacing(1,0,1)
    }
  },
  card3: { 
    '&:hover': {
      background: lighten('#6059e9',0.45),
      padding: theme.spacing(1,0,1)
    }
  },
  card4: { 
    '&:hover': {
      background: lighten('#e135ba',0.45),
      padding: theme.spacing(1,0,1)
    }
  }
}));

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
    console.log(clusterID);
    const newCluster: ClusterType = await getGroupCluster(groupID.toString(), clusterID);
    uiState.setCurrentCluster(newCluster);
    uiState.currentClusterName = clusterName; 
    uiState.currentGroupID = groupID.toString();
    redirect(`/cluster?name=${clusterName}`);
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
                  className={clsx(classes.indivCard, {
                    [classes.card0]: cluster.id == '0',
                    [classes.card1]: cluster.id == '1',
                    [classes.card2]: cluster.id == '2',
                    [classes.card3]: cluster.id == '3',
                    [classes.card4]: cluster.id == '4',
                  })}
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
