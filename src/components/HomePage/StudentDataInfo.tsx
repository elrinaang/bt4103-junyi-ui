import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root:{ 
    backgroundColor: 'white'
  },
  clusterGroup:{ 
    padding: theme.spacing(4,0,2)
  },
  indivData:{
    textAlign: 'center',
    //alignSelf: 'center',
  },
  text:{
    padding:theme.spacing(3,0,3)
  },
  iconGrid:{
    margin: theme.spacing(6,0,0)
  }
}));

const StudentDataInfo: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant="h5">What Kinds of Student Data are Used?</Typography>
        <br/>
        <Typography>To group students into their respective clusters, we used both <b>demographic</b> and <b>behavioural</b> data. Information on individual student can also be accessed by selecting individual students in the student list.</Typography>
        <Grid container direction="row" className={classes.iconGrid} spacing={2}>
          <Grid item xs={6} className={classes.indivData}>
            <Paper elevation={0}>
              <PersonIcon fontSize="large"/>
              <Typography><b>Demographic Data</b></Typography>
              <div style={{textAlign: 'center'}}>
                <ul style={{display: 'inline-block', paddingLeft:0}}>
                  <li>Gender</li>
                  <li>City</li>
                  <li>Grade</li>
                </ul>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} className={classes.indivData}>
            <HistoryIcon fontSize="large"/>
            <Typography><b>Behavioral Data</b></Typography>
            <div style={{textAlign: 'center'}}>
              <ul style={{display: 'inline-block', paddingLeft:0}}>
                <li>Past Average Accuracy</li>
                <li>Average No. of Hints Used</li>
                <li>No. of Points</li>
                <li>No. of Badges</li>
                <li>No. of Exercises Attempted</li>
                <li>No. of Problems Attempted</li>
                <li>Types of Problems Attempted</li>
                <li>No. of Upgrades</li>
                <li>No. of Downgrades</li>
              </ul>
            </div>
          </Grid>
        </Grid>
    </div>
  );
};

export default observer(StudentDataInfo); 