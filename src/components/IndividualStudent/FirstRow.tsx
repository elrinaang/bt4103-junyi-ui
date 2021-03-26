import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../stores/StoreProvider';
import Paper from '@material-ui/core/Paper';
import { observer } from 'mobx-react';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

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
  }
}));

const getAccuracyasPercentage = (rawNumber: number) => { 
  const percent = rawNumber * 100; 
  return Math.round(percent * 100)/100; 
};


const FirstRow: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;
  
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={6}>
        <Paper className={classes.indivStat} square>
          <Typography variant="h4" className={classes.text}>{`${getAccuracyasPercentage(currentStudent.avg_accuracy)}%`}</Typography>  
          <Typography variant="subtitle1" color="secondary"><b>Predicted Average Accuarcy</b></Typography>
          <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <br/>
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        </Paper>
      </Grid> 
      <Grid item xs={3}> 
        <Paper className={classes.indivStat} square>
          <Typography variant="h4" className={classes.text}>{currentStudent.exercises_attempted}</Typography>  
          <Typography variant="subtitle1" color="secondary"><b>No.of Exercises Attempted</b></Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.indivStat} square>
          <Typography variant="h4" className={classes.text}>{currentStudent.problems_attempted}</Typography>  
          <Typography variant="subtitle1" color="secondary"><b>No.of Problems Attempted</b></Typography>
        </Paper>
      </Grid> 
    </Grid>
  );
};

export default observer(FirstRow); 