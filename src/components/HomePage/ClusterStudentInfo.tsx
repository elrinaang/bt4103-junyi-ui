import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import redirect from '../../lib/redirect';
import Box from '@material-ui/core/Box';
import Image from 'next/image';


const useStyles = makeStyles((theme) => ({
  root:{ 
    backgroundColor: 'white'
  },
  clusterGroup:{ 
    padding: theme.spacing(4,0,2)
  },
  clusterPicture:{
    textAlign: 'center',
    alignSelf: 'center',
  },
  text:{
    padding:theme.spacing(3,0,3)
  },
  decisionTree: { 
    margin: theme.spacing(2,0,2)
  }
}));

const ClusterStudentInfo: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();

  const Form = () => 
    <form noValidate autoComplete="off">
      <TextField
        label="Group Name"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
    </form>

  return (
    <div className={classes.root}>
        <Typography variant="h5">What are Student Clusters?</Typography>
        <br/>
        <Typography>Students clusters are created by grouping students based on their <b>demographic data</b> and <b>past exercise history</b>. Students within each cluster tend to have <b>similar learning backgrounds</b> and as trainers, you will be able to tailor your curriculum based on which cluster the students belong to.</Typography>
        <br/>
        <Typography>Currently, there are a total of <b>5 clusters</b>, with each cluster displaying their own unqiue characteristics.</Typography>
        <Image src="/decisionTree.jpg" width="5000" height="1200" className={classes.decisionTree}/>
        <Grid container direction="row" className={classes.clusterGroup} spacing={2}>
            <Grid item className={classes.clusterPicture} xs={3} style={{backgroundColor: '#ec9455'}}><Typography variant="h2" className={classes.text}>1</Typography></Grid>
            <Grid item xs={8}>
              <Form/>
              <Typography>Cluster description</Typography>
            </Grid>
        </Grid>
        <Grid container direction="row" className={classes.clusterGroup} spacing={2}>
            <Grid item className={classes.clusterPicture} xs={3} style={{backgroundColor: '#91e755'}}><Typography variant="h2" className={classes.text}>2</Typography></Grid>
            <Grid item xs={8}>
              <Typography><b>Cluster 2</b></Typography>
              <Typography>Cluster description</Typography>
            </Grid>
        </Grid>
        <Grid container direction="row" className={classes.clusterGroup} spacing={2}>
            <Grid item className={classes.clusterPicture} xs={3} style={{backgroundColor: '#31e6c7'}}><Typography variant="h2" className={classes.text}>3</Typography></Grid>
            <Grid item xs={8}>
              <Typography><b>Cluster 3</b></Typography>
              <Typography>Cluster description</Typography>
            </Grid>
        </Grid>
        <Grid container direction="row" className={classes.clusterGroup} spacing={2}> 
            <Grid item className={classes.clusterPicture} xs={3} style={{backgroundColor: '#6059e9'}}><Typography variant="h2" className={classes.text}>4</Typography></Grid>
            <Grid item xs={8}>
              <Typography><b>Cluster 4</b></Typography>
              <Typography>Cluster description</Typography>
            </Grid>
        </Grid>
        <Grid container direction="row" className={classes.clusterGroup} spacing={2}> 
            <Grid item className={classes.clusterPicture} xs={3} style={{backgroundColor: '#e135ba'}}><Typography variant="h2" className={classes.text}>5</Typography></Grid>
            <Grid item xs={8}>
              <Typography><b>Cluster 5</b></Typography>
              <Typography>Cluster description</Typography>
            </Grid>
        </Grid>
    </div>
  );
};

export default observer(ClusterStudentInfo); 