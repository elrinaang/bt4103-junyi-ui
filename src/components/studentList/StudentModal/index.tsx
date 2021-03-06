import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';


const useStyles = makeStyles(theme => ({
  root:{ 
    padding: theme.spacing(0,5,0)
  },
  indivStat: { 
    backgroundColor: 'white'
  }
}));


const StudentModal: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const currentStudent = uiState.currentStudent;
  
  const handleClose = () => { 
    uiState.setCurrentStudent(null);
  }

  return (
    <Dialog 
      onClose={handleClose} 
      open={currentStudent != null} 
      maxWidth="lg" 
      fullWidth 
      PaperProps={{style:{backgroundColor: '#F8F8F8'}}} 
      className={classes.root}
    >
      <DialogTitle id="simple-dialog-title"><Typography variant="h5"><b>Student Name: </b>{currentStudent.name}</Typography></DialogTitle>
        <FirstRow/>
        <SecondRow/>
        <ThirdRow/>
    </Dialog>
  );
};

export default observer(StudentModal); 