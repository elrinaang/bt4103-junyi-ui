import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownwardRounded';
import Avatar from '@material-ui/core/Avatar';
import { useStores } from '../../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';

const useStyles = makeStyles(theme => ({
  indivStat: { 
    textAlign: 'center',
    alignSelf: 'center',
    padding: theme.spacing(2,0,2)
  },
  text: { 
    color: theme.palette.info.main
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: theme.spacing(0.5,0,0.5)
 }
}));

const getAccuracyasPercentage = (rawNumber: number) => { 
  const percent = rawNumber * 100; 
  return Math.round(percent * 100)/100; 
}

const GeneralStatistics: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;

  const noHints = () => { 
    const rawNumber = currentStudent.avg_hint_per_attempt; 
    return Math.round(rawNumber*100)/100;
  };
  
  return (
    <Grid container direction="row" spacing={2}>
    <Grid item xs={3}>
        <Paper className={classes.indivStat} square>
        <div className={classes.avatar}>
            <Avatar style={{backgroundColor:'#b19cd9'}}>
            <ShowChartIcon fontSize="large"/>
            </Avatar>
        </div>
        <Typography variant="h4" className={classes.text}>{`${getAccuracyasPercentage(currentStudent.avg_accuracy)}%`}</Typography>  
        <Typography variant="subtitle1" color="secondary"><b>Past Average Accuracy</b></Typography>
        </Paper>
    </Grid> 
    <Grid item xs={3}>
        <Paper className={classes.indivStat} square> 
        <div className={classes.avatar}>
            <Avatar style={{backgroundColor:'#aec6cf'}}>
            <EmojiObjectsIcon fontSize="large"/>
            </Avatar>
        </div>
        <Typography variant="h4" className={classes.text}>{noHints()}</Typography>  
        <Typography variant="subtitle1" color="secondary"><b>Average Number of Hints Used</b></Typography>
        </Paper>
    </Grid> 
    <Grid item xs={3}> 
        <Paper className={classes.indivStat} square>
        <div className={classes.avatar}>
            <Avatar style={{backgroundColor:'#77dd77'}}>
            <ArrowUpwardIcon fontSize="large"/>
            </Avatar>
        </div>
        <Typography variant="h4" className={classes.text}>{currentStudent.no_upgrades}</Typography>  
        <Typography variant="subtitle1" color="secondary"><b>No.of Upgrades</b></Typography>
        </Paper>
    </Grid>
    <Grid item xs={3}>
        <Paper className={classes.indivStat} square>
        <div className={classes.avatar}>
            <Avatar style={{backgroundColor:'#ff6961'}}>
            <ArrowDownwardIcon fontSize="large"/>
            </Avatar>
        </div>
        <Typography variant="h4" className={classes.text}>{currentStudent.no_downgrades}</Typography>  
        <Typography variant="subtitle1" color="secondary"><b>No.of Downgrades</b></Typography>
        </Paper>
    </Grid> 
    </Grid>
  );
};

export default observer(GeneralStatistics); 