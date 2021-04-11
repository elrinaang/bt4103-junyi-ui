import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useStores } from '../../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, PieChart, Pie, Label } from 'recharts';

const COLORS = ['#FF9933', '#8caec2','#333366'];

const useStyles = makeStyles(theme => ({
  predAccuracyTitle: { 
    display: 'inline-block',
    margin: theme.spacing(3,2,3)
  },
  predAccuracyValue: { 
    display: 'inline-block',
    float: 'right',
    margin: theme.spacing(2,2,2),
    color: theme.palette.info.main
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
    padding: theme.spacing(2,0,0)
  },
  timeContent: { 
    top: '50%',
    msTransform: 'translateY(50%)',
    transform: 'translateY(20%)'
  },
  square: { 
    padding: theme.spacing(0,0,4)
  },
  secondSquare:{
    padding: theme.spacing(2,0,-1),
    marginTop: theme.spacing(1)
  },
  exerciseStat: { 
    textAlign: 'center',
    padding: theme.spacing(3,0,0)
  }
}));

const getTimeAsMins = (seconds: number) => { 
  return Math.floor(seconds / 60);
}

const problemData = [
  { name: 'Basic', value: 40 },
  { name: 'Intermediate', value: 50},
  { name: 'Advanced', value: 30}
]

const ExerciseStatistics: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;
  
  return (
    <div className={classes.root}>
    <Grid container direction="row" spacing={2}>
      <Grid item xs={6}>
        <Paper square className={classes.square}>
          <div>
            <Typography variant="subtitle1" color="secondary" className={classes.predAccuracyTitle}><b>Exercises Attempted</b></Typography> 
          </div>
          <Divider/>
          <Grid container direction="row">
            <Grid item xs={6}>
              <div className={classes.exerciseStat}>
                <Typography variant="subtitle1" color="secondary"><b>No.of Exercises</b></Typography>
                <Typography variant="h4" className={classes.text}>{currentStudent.exercises_attempted}</Typography> 
              </div> 
            </Grid>
            <Grid item xs={6}>
              <div className={classes.exerciseStat}>
                <Typography variant="subtitle1" color="secondary"><b>Time taken Per Exercise</b></Typography>
                <Typography variant="h4" className={classes.text}>{`${getTimeAsMins(currentStudent.avg_time_per_exercise)} mins`}</Typography>  
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper square className={classes.secondSquare}>
          <Grid container direction="row" style={{paddingTop: 4}}>
            <Grid item xs={6}>
              <div className={classes.indivStat}>
                <Typography variant="subtitle1" color="secondary"><b>No.of Upgrades*</b></Typography>
                <Typography variant="h4" className={classes.text}>{currentStudent.no_upgrades}</Typography> 
              </div> 
            </Grid>
            <Grid item xs={6}>
              <div className={classes.indivStat}>
                <Typography variant="subtitle1" color="secondary"><b>No.of Downgrades**</b></Typography>
                <Typography variant="h4" className={classes.text}>{currentStudent.no_downgrades}</Typography>  
              </div>
            </Grid>
            <h6 style={{marginBottom: 0, marginTop: 30, marginLeft: 10}}>* Upgrade happens when a student answers 2 problems in an exercise correctly</h6>
            <h6 style={{marginTop: 0, marginLeft: 10}}>** Downgrade happens when a student answers 2 problems in an exercise incorrectly</h6>
          </Grid>
        </Paper>
      </Grid> 
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item>
            <Paper style={{height: '100%'}} square>
            <div>
              <Typography variant="subtitle1" color="secondary" className={classes.predAccuracyTitle}><b>Problems Attempted</b></Typography> 
              <Typography variant="h4" className={classes.predAccuracyValue}>{currentStudent.problems_attempted}</Typography>  
            </div>
            <Divider/> 
            <PieChart width={280} height={300} style={{margin: '0 auto'}}>
              <Pie
                data={problemData}
                labelLine={false}
                innerRadius="60%"
                outerRadius="80%"
                startAngle={90}
                endAngle={-270}
                fill="#8884d8"
                dataKey="value"
              >
                {problemData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label position="center" style={{ fontSize: '120%', fill: '#FF9933'}}>{`${currentStudent.problems_attempted} Problems`}</Label>
              </Pie>
              <Tooltip />
              <Legend verticalAlign="top" align="center" width={480}/>
            </PieChart>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    </div>
  );
};

export default observer(ExerciseStatistics); 