import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Graph from 'react-graph-vis'; 
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';

const useStyles = makeStyles(theme => ({
    root: { 
        padding: theme.spacing(0,2,0)
    },
    headerName: { 
        marginLeft: theme.spacing(2),
        paddingTop: theme.spacing(3)
    },
    formControl: {
        margin: theme.spacing(1.5,1,0),
        minWidth: 120,
    },
}));

const graph = {
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" }
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ]
  };

  const options = {
    layout: {
      hierarchical: true
    },
    nodes : { 
        color: "#FF9933",
        font: "20px Montserrat black",
        borderWidth: 0,
        imagePadding: 3
    },
    edges: {
      color: "#000000",
      width: 3
    },
    height: "400px"
  };

const SecondRowLearningPath: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <Paper elevation={0} className={classes.root}>
        <h2 className={classes.headerName}><b>Possible Learning Paths</b></h2>
        <div style={{display: 'inline-block',float:'right'}}>
            <FormControl className={classes.formControl}>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                >
                    <MenuItem value={10}>Popularity</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                </Select>
            </FormControl>
        </div>
        <h3 style={{display: 'inline-block',float:'right'}}>Generate by:</h3>
        <Graph
            graph={graph}
            options={options}
        />
    </Paper>
  );
};

export default observer(SecondRowLearningPath);