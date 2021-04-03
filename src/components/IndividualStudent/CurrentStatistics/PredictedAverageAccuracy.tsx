import * as React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import Divider from '@material-ui/core/Divider';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, PieChart, Pie, Label } from 'recharts';
import parse from 'html-react-parser';

const data = [
  {
    name: 'Page A',
    shap: 2400,
  },
  {
    name: 'Page B',
    uv: -3000,
    shap: 1398,
  },
  {
    name: 'Page C',
    shap: -9800,
  },
  {
    name: 'Page D',
    shap: 3908,
  },
  {
    name: 'Page E',
    shap: 4800,
  },
  {
    name: 'Page F',
    shap: -3800,
  },
  {
    name: 'Page G',
    shap: 4300,
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
          <Typography variant="subtitle1" color="secondary" className={classes.predAccuracyTitle}><b>Predicted Average Performance</b></Typography>
          <Typography variant="h4" className={classes.predAccuracyValue}>Strong</Typography>  
        </div>
        <Divider/>
        <ResponsiveContainer width='100%'>
        <div className={classes.barChart}>
          {parse(currentStudent.html)}
        </div>
        </ResponsiveContainer>
    </React.Fragment>
  );
};

export default observer(PredictedAverageAccuracy); 