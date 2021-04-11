import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import { Cell, Tooltip, Legend,PieChart, Pie, Label } from 'recharts';


const COLORS = ['#FF9933', '#8caec2','#333366'];

const useStyles = makeStyles(theme => ({
  root: { 
    padding: theme.spacing(0,2,0),
    width: '100%',
    height: '100%',
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
  const weakStudents = currentCluster.predictions.filter(student => student.bin == '1');
  const normalStudents = currentCluster.predictions.filter(student => student.bin == '2');
  const strongStudents = currentCluster.predictions.filter(student => student.bin == '3');
  const pieChartData = [ 
    {name: 'weak', value: weakStudents.length},
    {name: 'normal', value: normalStudents.length},
    {name: 'strong', value: strongStudents.length}
  ]

  return (
    <Paper className={classes.root}>
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