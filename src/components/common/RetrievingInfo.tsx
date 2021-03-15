import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { observer } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  retrievingInfo: { 
    marginTop: theme.spacing(2)
  },
  circularInfo: {
    marginTop: theme.spacing(1)
  }
}));

const RetrievingInfo: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" direction="column" className={classes.retrievingInfo}>
      <CircularProgress size={28} thickness={3.2} color="secondary"/>
      <Typography variant="inherit" className={classes.circularInfo}><b>Retrieving Information</b></Typography>
    </Grid>
  );
};

export default observer(RetrievingInfo);