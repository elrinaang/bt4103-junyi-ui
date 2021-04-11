import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RetrievingInfo from '../common/RetrievingInfo';
import ClassDetails from './ClassDetails';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import { getGroups, getClusterInfo } from '../../api/groupService';
import SelectGroupField from '../common/SelectGroupField';
import ClusterInformation from './ClusterInformation';

const useStyles = makeStyles((theme) => ({
  root:{
    padding: theme.spacing(5)
  }
}));

const GroupList: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();

  //UNCOMMENT FOR CONNECTION WITH BE 
  React.useEffect(() => {
    async function fetchGroups() {
      let groups = await getGroups();
      let clusters = await getClusterInfo(); 
      appStore.setGroups(groups);
      appStore.setListOfClusters(clusters); 
      uiState.setAppStatus('RETRIEVED_INFORMATION');
      //pre-set first group 
      uiState.setCurrentGroup(appStore.groupList[0].name);
    }

    fetchGroups();
  }, []);

  return (
    <Grid container direction="column" spacing={3}> 
      <Grid item style={{backgroundColor: 'white'}}>
        <ClusterInformation/>
      </Grid>
      <Grid item>
        <SelectGroupField/>
      </Grid>
      {
        uiState.appStatus == 'RETRIEVING_INFORMATION' 
        ? <RetrievingInfo/>
        : <Grid item>
            {
              appStore.groupList.length > 0 
              ? <ClassDetails/>
              : <Typography variant="body1">No Groups Added</Typography>
            }
          </Grid> 
      }
    </Grid>
  );
};

export default observer(GroupList); 