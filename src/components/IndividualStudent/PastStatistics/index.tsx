import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import GeneralStatistics from './GeneralStatistics';
import SecondaryStatistics from './SecondaryStatistics';

const useStyles = makeStyles(theme => ({
  root:{ 
    marginBottom: theme.spacing(1.5)
  },
  indivStat: { 
    textAlign: 'center',
    alignSelf: 'center',
    padding: theme.spacing(2,0,2)
  },
  text: { 
    color: theme.palette.info.main
  },
  header: { 
    color: theme.palette.primary.main,
    padding: theme.spacing(1,2,1),
    marginBottom: theme.spacing(1)
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: theme.spacing(0.5,0,0.5)
 },
 headerContainer: { 
   marginBottom: theme.spacing(1)
 }
}));

const PastStatistics: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  
  return (
    <Grid container className={classes.root}>
        <Grid container direction="column" className={classes.headerContainer}>
            <Grid item xs={12}>
            <h2><b>Past Exercise Statistics:</b></h2>
            </Grid>
        </Grid> 
        <Grid item xs={12}>
            <GeneralStatistics/>
        </Grid>
        <Grid item xs={12}>
            <SecondaryStatistics/>
        </Grid>
    </Grid>
  );
};

export default observer(PastStatistics); 