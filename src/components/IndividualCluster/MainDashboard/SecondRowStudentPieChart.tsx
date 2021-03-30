import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import { StudentType } from '../../../lib/Types';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, PieChart, Pie, Label } from 'recharts';


const COLORS = ['#FF9933', '#62727b','#333366'];

const useStyles = makeStyles(theme => ({
  root: { 
    padding: theme.spacing(0,2,0),
    width: '100%',
    height: '100%'
  },
  headerName: { 
    marginLeft: theme.spacing(2),
    paddingTop: theme.spacing(3)
  },
  container: {
    maxHeight: 440,
  },
}));

const SecondRowStudentPieChart: React.FC = () => {

  const classes = useStyles();
  const { uiState } = useStores();
  const currentCluster = uiState.currentCluster; 
  const pieChartData = [ 
    {name: 'weak', value: currentCluster.prediction.weak.length},
    {name: 'normal', value: currentCluster.prediction.normal.length},
    {name: 'strong', value: currentCluster.prediction.strong.length}
  ]

  return (
    <Paper elevation={0} className={classes.root}>
      <h2 className={classes.headerName}>Distribution of Students</h2>
      <PieChart width={280} height={300} style={{margin: '0 auto'}}>
            <Pie
              data={pieChartData}
              labelLine={false}
              innerRadius="60%"
              outerRadius="80%"
              startAngle={90}
              endAngle={-270}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <Label position="center" style={{ fontSize: '120%', fill: '#FF9933'}}>{`${currentCluster.no_students} Students`}</Label>
            </Pie>
            <Tooltip />
            <Legend verticalAlign="top" align="center" width={480}/>
        </PieChart>
    </Paper>
  );
};

export default observer(SecondRowStudentPieChart);