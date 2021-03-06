import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ClassDetails from './ClassDetails';
import SearchGroupField from './SearchGroupField';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';

const HomePage: React.FC = () => {

  const { uiState, appStore } = useStores(); 

  return (
    <Grid container direction="column" spacing={3}> 
      <Grid item>
        <SearchGroupField/>
      </Grid>
      <Grid item>
        {
          appStore.groupList.length > 0 
          ? <ClassDetails/>
          : <Typography variant="body1">No Groups Added</Typography>
        }
      </Grid> 
    </Grid>
  );
};

export default observer(HomePage); 