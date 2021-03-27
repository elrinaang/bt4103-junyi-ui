import * as React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';
import Divider from '@material-ui/core/Divider';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, PieChart, Pie, Label } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: -3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const COLORS = ['#FF9933', '#C1C1C1'];;

const useStyles = makeStyles(theme => ({
  root:{ 
    marginBottom: theme.spacing(1),
  },
  indivStat: { 
    textAlign: 'center',
    padding: theme.spacing(2,0,2)
  },
  text: { 
    color: theme.palette.info.main
  },
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
  barChart: {
    marginTop: theme.spacing(2)
  }
}));

const getAccuracyasPercentage = (rawNumber: number) => { 
  const percent = rawNumber * 100; 
  return Math.round(percent * 100)/100; 
};


const CurrentStatistics: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;
  const screen = useTheme();
  const largeScreen = useMediaQuery(screen.breakpoints.up('xl'));

  const exerciseData = [ 
    { name: 'Group A', value: parseInt(currentStudent.exercises_attempted) },
    { name: 'Group B', value: 10}
  ];

  const problemData = [
    { name: 'Group A', value: parseInt(currentStudent.problems_attempted) },
    { name: 'Group B', value: 50}
  ]
  
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={6}>
        <Paper style={{height: '100%'}} square>
          <div>
            <Typography variant="subtitle1" color="secondary" className={classes.predAccuracyTitle}><b>Predicted Average Accuracy</b></Typography>
            <Typography variant="h4" className={classes.predAccuracyValue}>{`${getAccuracyasPercentage(currentStudent.avg_accuracy)}%`}</Typography>  
          </div>
          <Divider/>
          <ResponsiveContainer width='100%'>
            <div className={classes.barChart}>
              <BarChart
                width={500}
                height={300}
                data={data}
                style={{margin: '0 auto'}}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <br/>
                <Bar dataKey="pv" fill='#FF9933' />
                <Bar dataKey="uv" fill='#333366' />
              </BarChart>
            </div>
          </ResponsiveContainer>
        </Paper>
      </Grid> 
      <Grid item xs={3}> 
        <Paper style={{height: '100%'}} square>
          <div>
            <Typography variant="subtitle1" color="secondary" className={classes.predAccuracyTitle}><b>No.of Exercises Attempted</b></Typography>
            { largeScreen && <Typography variant="h4" className={classes.predAccuracyValue}>{currentStudent.exercises_attempted}</Typography>}  
          </div>
          <Divider/>
          <PieChart width={280} height={300} style={{margin: '0 auto'}}>
          <Pie
            data={exerciseData}
            labelLine={false}
            innerRadius="60%"
            outerRadius="80%"
            startAngle={90}
            endAngle={-270}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Label position="center" style={{ fontSize: '120%', fill: '#FF9933'}}>{`${currentStudent.exercises_attempted} Exercises`}</Label>
          </Pie>
        </PieChart>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper style={{height: '100%'}} square>
          <div>
            <Typography variant="subtitle1" color="secondary" className={classes.predAccuracyTitle}><b>No.of Problems Attempted</b></Typography>
            {largeScreen && <Typography variant="h4" className={classes.predAccuracyValue}>{currentStudent.problems_attempted}</Typography>}  
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
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <Label position="center" style={{ fontSize: '120%', fill: '#FF9933'}}>{`${currentStudent.problems_attempted} Problems`}</Label>
            </Pie>
        </PieChart>
        </Paper>
      </Grid> 
    </Grid>
  );
};

export default observer(CurrentStatistics); 