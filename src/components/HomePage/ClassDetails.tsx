import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(2),
    minWidth: '100%'
  }
}));

const ClassDetails: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid container direction="row"> 
      <Paper className={classes.paper}>
        <Typography variant="button"><b>Class A</b></Typography>
      </Paper>
    </Grid>
  );
};

export default ClassDetails; 