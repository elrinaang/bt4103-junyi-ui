import * as React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import Divider from '@material-ui/core/Divider';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, PieChart, Pie, Label } from 'recharts';

const COLORS = ['#FF9933', '#C1C1C1'];;

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
}));

const ProblemsAttempted: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;
  const screen = useTheme();
  const largeScreen = useMediaQuery(screen.breakpoints.up('xl'));

  const problemData = [
    { name: 'Group A', value: parseInt(currentStudent.problems_attempted) },
    { name: 'Group B', value: 50}
  ]
  
  return (
    <React.Fragment>
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
              {problemData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <Label position="center" style={{ fontSize: '120%', fill: '#FF9933'}}>{`${currentStudent.problems_attempted} Problems`}</Label>
            </Pie>
        </PieChart>
    </React.Fragment>
  );
};

export default observer(ProblemsAttempted); 