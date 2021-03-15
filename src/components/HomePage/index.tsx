import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import RetrievingInfo from '../common/RetrievingInfo';
import ClassDetails from './ClassDetails';
import SearchGroupField from './SearchGroupField';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import { getGroups } from '../../api/groupService';

const HomePage: React.FC = () => {

  const { uiState, appStore } = useStores(); 

  //Retrieve groups; TODO: set an awaiting circle when the groups are still retrieving 
  React.useEffect(() => {
    async function fetchGroups() {
      let groups = await getGroups();
      appStore.setGroups(groups);
      uiState.setAppStatus('RETRIEVED_INFORMATION');
    }

    fetchGroups();
  }, []);

  return (
    <Grid container direction="column" spacing={3}> 
      <Grid item>
        <SearchGroupField/>
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

export default observer(HomePage); 