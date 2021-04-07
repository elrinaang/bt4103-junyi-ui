import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RetrievingInfo from '../common/RetrievingInfo';
import ClassDetails from './ClassDetails';
import SearchGroupField from './SearchGroupField';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import { getGroups } from '../../api/groupService';

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
      appStore.setGroups(groups);
      uiState.setAppStatus('RETRIEVED_INFORMATION');
    }

    fetchGroups();
  }, []);

  return (
    <Grid container direction="column" spacing={3} className={classes.root}>
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

export default observer(GroupList);
