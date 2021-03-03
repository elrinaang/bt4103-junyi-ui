import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecentlyAddedClass from './RecentlyAddedClass';
import ClassDetails from './ClassDetails';
import SelectGroupField from '../common/SelectGroupField';
import SearchGroupField from '../common/SearchGroupField';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';

const HomePage: React.FC = () => {

  const { uiState, appStore } = useStores(); 

  return (
    <Grid container direction="column" spacing={3}> 
      <Grid item>
        <SearchGroupField/>
      </Grid>
      {/* 
      {
        appStore.recentlyAddedGroups.length > 0 && 
        <Grid item>
          <RecentlyAddedClass/>
        </Grid>
      }
      */}
      <Grid item>
        <ClassDetails/>
      </Grid> 
    </Grid>
  );
};

export default observer(HomePage); 