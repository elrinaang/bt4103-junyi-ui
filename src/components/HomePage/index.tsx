import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecentlyAddedClass from './RecentlyAddedClass';
import ClassDetails from './ClassDetails';
import SearchClassField from './SearchClassField';

const HomePage: React.FC = () => {

  return (
    <Grid container direction="column" spacing={3}> 
      <Grid item>
        <SearchClassField/>
      </Grid>
      <Grid item>
        <RecentlyAddedClass/>
      </Grid>
      <Grid item>
        <ClassDetails/>
      </Grid>
    </Grid>
  );
};

export default HomePage; 