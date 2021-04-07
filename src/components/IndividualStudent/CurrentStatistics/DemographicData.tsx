import * as React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import Divider from '@material-ui/core/Divider';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, PieChart, Pie, Label } from 'recharts';
import parse from 'html-react-parser';

const useStyles = makeStyles(theme => ({
    predAccuracyTitle: { 
        display: 'inline-block',
        margin: theme.spacing(3,2,3)
      },
    text: {
    marginLeft: theme.spacing(2)
  }
}));

const DemographicData: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;

  return (
    <React.Fragment>
        <div>
          <Typography variant="subtitle1" color="secondary" className={classes.predAccuracyTitle}><b>Basic Information</b></Typography>
        </div>
        <Divider/>
        <h3 className={classes.text}><b>Gender: </b>{currentStudent.gender}</h3>
        <h3 className={classes.text}><b>Grade: </b>{currentStudent.user_grade}</h3>
        <h3 className={classes.text}><b>City: </b>{currentStudent.user_city}</h3>
        <h3 className={classes.text}><b>Cluster: </b>3</h3>
    </React.Fragment>
  );
};

export default observer(DemographicData); 