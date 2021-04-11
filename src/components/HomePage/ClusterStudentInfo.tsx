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
    height: '60%',
    width: '60%'
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
        <div style={{textAlign: 'center'}}>
          <Image src="/decisionTree.jpg" width="5000" height="1200" className={classes.decisionTree}/>
          <Typography variant="caption" style={{textDecoration: 'underline'}}>Pruned Decision Tree to Show Clustering of Students</Typography>
        </div>
        <br/>
        <Grid container direction="row" className={classes.clusterGroup} spacing={4}>
          <Grid item className={classes.clusterPicture} xs={3} style={{backgroundColor: '#ec9455'}}><Typography variant="h2" className={classes.text}>1</Typography></Grid>
          <Grid item xs={9}>
            <Typography><b>Cluster 1</b></Typography>
            <Typography>Students in this cluster generally have above average accuracies of 67% to 75%. In terms of problems attempted, on average, students in cluster 1 attempted less than 33 questions.</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.clusterGroup} spacing={4}>
          <Grid item className={classes.clusterPicture} xs={3} style={{backgroundColor: '#91e755'}}><Typography variant="h2" className={classes.text}>2</Typography></Grid>
          <Grid item xs={9}>
            <Typography><b>Cluster 2</b></Typography>
            <Typography>While not much information can be gathered about accuracies of students in Cluster 2, students in this cluster generally do not get downgraded, i.e. it is unlikely that they answer more than 2 problems in an exercise incorrectly. At the same time, they are also usually not student mentors to other students.</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.clusterGroup} spacing={4}>
          <Grid item className={classes.clusterPicture} xs={3} style={{backgroundColor: '#31e6c7'}}><Typography variant="h2" className={classes.text}>3</Typography></Grid>
          <Grid item xs={9}>
            <Typography><b>Cluster 3</b></Typography>
            <Typography>Similar to students in Cluster 2, students in Cluster 3 are also unlikely to be student mentors. However, they can be identified as students who are generally more careless as they are more prone to being downgraded in exercises, i.e. answering at least 2 problems in an exercise incorrectly.</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.clusterGroup} spacing={4}> 
          <Grid item className={classes.clusterPicture} xs={3} style={{backgroundColor: '#6059e9'}}><Typography variant="h2" className={classes.text}>4</Typography></Grid>
          <Grid item xs={9}>
            <Typography><b>Cluster 4</b></Typography>
            <Typography>Students in Cluster 4 are identified to be the strongest students with the highest average accuracies between 75% and 83%.</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.clusterGroup} spacing={4}> 
          <Grid item className={classes.clusterPicture} xs={3} style={{backgroundColor: '#e135ba'}}><Typography variant="h2" className={classes.text}>5</Typography></Grid>
          <Grid item xs={9}>
            <Typography><b>Cluster 5</b></Typography>
            <Typography>Students in Cluster 5 do not have much identifiable characteristics as they are usually made of students who are new to the platform and have little information on their learning behaviours.</Typography>
          </Grid>
        </Grid>
    </div>
  );
};

export default observer(ClusterStudentInfo); 