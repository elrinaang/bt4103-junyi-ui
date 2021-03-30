import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Avatar from '@material-ui/core/Avatar';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';


const useStyles = makeStyles(theme => ({
    root:{ 
        padding: theme.spacing(0,5,0),
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
        padding: theme.spacing(1,2,1)
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


const FirstRow: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentCluster = uiState.currentCluster;

  const getAccuracyasPercentage = (rawNumber: number) => { 
    const percent = rawNumber * 100; 
    return Math.round(percent * 100)/100; 
  }

  return (
      <Grid container direction="row" spacing={1}>
        <Grid item xs={3}>
          <Paper elevation={0} className={classes.indivStat}>
            <div className={classes.avatar}>
              <Avatar style={{backgroundColor:'#b19cd9'}}>
                <PersonIcon fontSize="large" style={{color:'white'}}/>
              </Avatar>
            </div>
            <Typography variant="h4" className={classes.text}>{currentCluster.no_students}</Typography>  
            <Typography variant="subtitle1" color="secondary"><b>Number of Students</b></Typography>
          </Paper>
        </Grid> 
        <Grid item xs={3}> 
          <Paper elevation={0} className={classes.indivStat}>
            <div className={classes.avatar}>
              <Avatar style={{backgroundColor:'#77dd77'}}>
                <ShowChartIcon fontSize="large" style={{color:'white'}}/>
              </Avatar>
            </div>
            <Typography variant="h4" className={classes.text}>{`${getAccuracyasPercentage(parseFloat(currentCluster.avg_accuracy))}%`}</Typography>  
            <Typography variant="subtitle1" color="secondary"><b>Average Accuracy</b></Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0} className={classes.indivStat}>
            <div className={classes.avatar}>
              <Avatar style={{backgroundColor:'#ff9fb6'}}>
                <AssessmentIcon fontSize="large" style={{color:'white'}}/>
              </Avatar>
            </div>
            <Typography variant="h4" className={classes.text}>{Math.round(parseInt(currentCluster.avg_exercises_attempted))}</Typography>  
            <Typography variant="subtitle1" color="secondary"><b>Avg No.of Exercises Attempted</b></Typography>
          </Paper>
        </Grid> 
        <Grid item xs={3}>
          <Paper elevation={0} className={classes.indivStat}>
            <div className={classes.avatar}>
              <Avatar style={{backgroundColor:'#aec6cf'}}>
                <MenuBookIcon fontSize="large" style={{color:'white'}}/>
              </Avatar>
            </div>
            <Typography variant="h4" className={classes.text}>{Math.round(parseInt(currentCluster.avg_problems_attempted))}</Typography>  
            <Typography variant="subtitle1" color="secondary"><b>Avg No.of Problems Attempted</b></Typography>
          </Paper>
        </Grid> 
      </Grid>
  );
};

export default observer(FirstRow);