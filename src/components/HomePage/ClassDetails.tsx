import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(2),
    minWidth: '100%'
  }
}));

const ClassDetails: React.FC = () => {

  const classes = useStyles();
  const { uiState } = useStores();

  return (
    <React.Fragment>
      <Typography variant="h6"><b>{uiState.currentGroup ? uiState.currentGroup.groupName : 'None Selected'}</b></Typography>
      <Grid container direction="row"> 
        <Paper className={classes.paper} square>
          <h1>Display Clusters</h1>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default observer(ClassDetails); 