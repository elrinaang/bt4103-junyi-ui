import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from '@material-ui/core/Link';
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
    padding: theme.spacing(0.25,2,0.25),
    marginTop: theme.spacing(1),
  },
  backButton: { 
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  root: { 
    padding: theme.spacing(2,2,0.25),
  }
}));


const IndividualStudent: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;

  React.useEffect(() =>  currentStudent === null && redirect('/studentlist'),[]); 

  return (
    <Grid container direction="column" className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        <Link color="inherit" href="/studentlist">Student List</Link>
        <Typography color="textPrimary">{currentStudent.name}</Typography>
      </Breadcrumbs>
      <h1><b>{currentStudent.name}</b></h1>
      <FirstRow/>
      <ThirdRow/>
      <SecondRow/>
    </Grid>
  );
};

export default observer(IndividualStudent); 