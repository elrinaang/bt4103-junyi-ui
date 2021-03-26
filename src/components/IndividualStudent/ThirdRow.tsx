import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownwardRounded';
import Avatar from '@material-ui/core/Avatar';
import { useStores } from '../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';

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


const ThirdRow: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;

  const noHints = () => { 
    const rawNumber = currentStudent.avg_hint_per_attempt; 
    return Math.round(rawNumber*100)/100;
  };
  
  return (
    <Grid container className={classes.root}>
      <Grid container direction="column" className={classes.headerContainer}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.header}>
            <Typography variant="h6"><b>Past Exercise Statistics:</b></Typography>
          </Paper>
        </Grid>
      </Grid> 
      <Grid container direction="row" spacing={1}>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.indivStat}>
            <div className={classes.avatar}>
              <Avatar style={{backgroundColor:'#aec6cf'}}>
                <EmojiObjectsIcon fontSize="large"/>
              </Avatar>
            </div>
            <Typography variant="h3" className={classes.text}>{noHints()}</Typography>  
            <Typography variant="subtitle1" color="secondary"><b>Average Number of Hints Used</b></Typography>
          </Paper>
        </Grid> 
        <Grid item xs={4}> 
          <Paper elevation={0} className={classes.indivStat}>
            <div className={classes.avatar}>
              <Avatar style={{backgroundColor:'#77dd77'}}>
                <ArrowUpwardIcon fontSize="large"/>
              </Avatar>
            </div>
            <Typography variant="h3" className={classes.text}>{currentStudent.no_upgrades}</Typography>  
            <Typography variant="subtitle1" color="secondary"><b>No.of Upgrades</b></Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.indivStat}>
            <div className={classes.avatar}>
              <Avatar style={{backgroundColor:'#ff6961'}}>
                <ArrowDownwardIcon fontSize="large"/>
              </Avatar>
            </div>
            <Typography variant="h3" className={classes.text}>{currentStudent.no_downgrades}</Typography>  
            <Typography variant="subtitle1" color="secondary"><b>No.of Downgrades</b></Typography>
          </Paper>
        </Grid> 
      </Grid>
    </Grid>
  );
};

export default observer(ThirdRow); 