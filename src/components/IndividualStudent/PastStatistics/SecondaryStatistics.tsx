import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Divider from '@material-ui/core/Divider';
import { useStores } from '../../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const useStyles = makeStyles(theme => ({
    predAccuracyTitle: { 
        display: 'inline-block',
        margin: theme.spacing(3,2,3)
    },
    root: { 
        marginTop: theme.spacing(2)
    },
    problemTypes: { 
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    text: { 
        color: theme.palette.info.main
    },
    indivStat: { 
        textAlign: 'center',
        padding: theme.spacing(2,0,2)
    },
    timeContent: { 
        //margin: 0,
        //position: 'absolute',
        top: '50%',
        msTransform: 'translateY(50%)',
        transform: 'translateY(20%)'
    }
}));

const getTimeAsMins = (seconds: number) => { 
  return Math.floor(seconds / 60);
}

const data = [
    {
      name: 'Basic',
      count: 50
    },
    {
      name: 'Intermediate',
      count: 20
    },
    {
      name: 'Advanced',
      count: 10 
    },
  ];

const SecondaryStatistics: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;
  
  return (
      <div className={classes.root}>
        <Grid container direction="row" spacing={2}>
            <Grid item xs={6}>
                <Paper style={{height: '100%'}} square>
                    <div>
                        <Typography variant="subtitle1" color="secondary" className={classes.predAccuracyTitle}><b>Types of Problems Attempted</b></Typography> 
                    </div>
                    <Divider/>
                    <div className={classes.problemTypes}>
                        <BarChart width={500} height={300} data={data} style={{margin: '0 auto'}}>
                            <Bar dataKey="count" fill="#FF9933" />
                            <XAxis dataKey="name">
                                <Label value="Types of problems" offset={0} position="insideBottom" />
                            </XAxis>
                            <YAxis label={{ value: 'No.of problems', angle: -90, position: 'insideLeft' }} />
                        </BarChart>
                    </div>
                </Paper>
            </Grid> 
            <Grid item xs={6}>
                <Paper style={{height: '100%'}} square> 
                    <div>
                        <Typography variant="subtitle1" color="secondary" className={classes.predAccuracyTitle}><b>Time taken</b></Typography> 
                    </div>
                    <Divider/>
                    <div className={classes.timeContent}>
                        <div className={classes.indivStat}>
                            <Typography variant="h3" className={classes.text}>{`${getTimeAsMins(currentStudent.avg_time_per_exercise)} mins`}</Typography>  
                            <Typography variant="subtitle1" color="secondary"><b>To Solve Each Problem</b></Typography>
                        </div>
                        <Divider/>
                        <div className={classes.indivStat}>
                            <Typography variant="h3" className={classes.text}>{`${getTimeAsMins(currentStudent.avg_time_btw_problem)} mins`}</Typography>  
                            <Typography variant="subtitle1" color="secondary"><b>Between Each Exercise</b></Typography>
                        </div>
                    </div>
                </Paper>
            </Grid>
      </Grid>

      </div>
  );
};

export default observer(SecondaryStatistics); 