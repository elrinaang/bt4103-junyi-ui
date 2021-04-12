import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0,2,2),
        height: '100%',
        marginBottom: theme.spacing(2)
      },
      headerName: {
        marginLeft: theme.spacing(2),
        paddingTop: theme.spacing(3)
      },
      formControl: {
        margin: theme.spacing(1.5,1,0),
        minWidth: 120,
      },
      mobileStepper: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'white'
      },
      learningPath: {
        width: '100%',
        margin: theme.spacing(0,0,3)
      },
      selectFieldContainer: {
        marginBottom: theme.spacing(2)
      },
      noPath: {
        marginTop: theme.spacing(10),
        width: '100%',
        textAlign: 'center'
      },
      stepIcon: {
        color: '#333366'
      }
}));


const GroupComparison: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentCluster = uiState.currentCluster;
  const currentGroup = appStore.groupList.find(group => group.id.toString() == uiState.currentGroupID);
  const [filter, setFilter] = React.useState('average accuracy');

  React.useEffect(() => console.log(appStore.groupList),[]);

  const accuracyData = [{name: uiState.currentClusterName, value: parseFloat(currentCluster?.avg_accuracy)},{name: currentGroup?.name,value: parseFloat(currentGroup?.avg_accuracy)}];
  const exerciseData = [{name: uiState.currentClusterName, value: parseFloat(currentCluster?.avg_exercises_attempted)},{name: currentGroup?.name,value: parseFloat(currentGroup?.avg_exercises_attempted)}];
  const problemData = [{name: uiState.currentClusterName, value: parseFloat(currentCluster?.avg_problems_attempted)},{name: currentGroup?.name,value: parseFloat(currentGroup?.avg_problems_attempted)}];

  const switchData = () => { 
      switch(filter){ 
        case('average accuracy'): 
          return accuracyData
        case('exercises attempted'):
          return exerciseData
        case('problems attempted'):
          return problemData 
      } 
  };

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setFilter(event.target.value as string);
  };

  return (
      <Grid container direction="row" spacing={1}> 
        <Grid item xs={12}>
            <Paper className={classes.root}>
                <h2 className={classes.headerName}>{`Compare with Group: ${filter}`}</h2>
                <div className={classes.selectFieldContainer}>
                    <div style={{display: 'inline-block',float:'right'}}>
                      <FormControl className={classes.formControl}>
                        <Select
                          value={filter}
                          onChange={handleChange}
                        >
                          <MenuItem value={'average accuracy'}>Average Accuracy</MenuItem>
                          <MenuItem value={'exercises attempted'}>Exercises attempted</MenuItem>
                          <MenuItem value={'problems attempted'}>Problems Attempted</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <h3 style={{display: 'inline-block',float:'right'}}>Compare by:</h3>
                      <BarChart
                      width={1000}
                      height={360}
                      data={uiState.currentCluster && switchData()}
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
                      <Bar dataKey="value" fill='#FF9933' />
                      </BarChart>
                </div>
            </Paper>
        </Grid>
      </Grid>
  );
};

export default observer(GroupComparison);