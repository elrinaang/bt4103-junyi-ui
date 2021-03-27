import * as React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../../stores/StoreProvider';
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
  barChart: {
    marginTop: theme.spacing(2)
  }
}));

const getAccuracyasPercentage = (rawNumber: number) => { 
  const percent = rawNumber * 100; 
  return Math.round(percent * 100)/100; 
};


const PredictedAverageAccuracy: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default observer(PredictedAverageAccuracy); 