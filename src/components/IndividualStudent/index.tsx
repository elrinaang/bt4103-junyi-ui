import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import redirect from '../../lib/redirect';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';

const useStyles = makeStyles(theme => ({
  indivStat: { 
    backgroundColor: 'white'
  },
  studentName: { 
    padding: theme.spacing(2.5,3,2.5),
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
  backButton: { 
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  root: { 
    padding: theme.spacing(0.25,2,0.25),
  }
}));


const IndividualStudent: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item xs={2}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => redirect('/studentlist')}
          size="large"
          className={classes.backButton}
        >
          Back
        </Button>
      </Grid>
      <Grid item>
        <Paper elevation={0} className={classes.studentName} square>
          <Typography variant="h6"><b>{currentStudent.name}</b></Typography>
        </Paper>
      </Grid>
      <FirstRow/>
      <SecondRow/>
      <ThirdRow/>
    </Grid>
  );
};

export default observer(IndividualStudent); 