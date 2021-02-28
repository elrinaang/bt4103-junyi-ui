import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecentlyAddedClass from './RecentlyAddedClass';
import ClassDetails from './ClassDetails';
import SelectGroupField from '../common/SelectGroupField';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';

const HomePage: React.FC = () => {

  const { uiState } = useStores(); 

  return (
    <Grid container direction="column" spacing={3}> 
      <Grid item>
        <SelectGroupField/>
      </Grid>
      <Grid item>
        <RecentlyAddedClass/>
      </Grid>
      {
        uiState.currentGroup.groupName != '' &&
        <Grid item>
          <ClassDetails/>
        </Grid> 
      }
    </Grid>
  );
};

export default observer(HomePage); 