import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import redirect from '../../lib/redirect';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  },
  groupButton: { 
    backgroundColor: theme.palette.info.main,
    color: 'white'
  },
  studentButton: { 
    backgroundColor: theme.palette.info.main,
    color: 'white',
    marginLeft: theme.spacing(4)
  },
  buttons: { 
    position: 'absolute',
    top: '75%',
    left: '50%',
    display: 'inline-block',
    transform: 'translate(-50%, -50%)'
  }
}));

const HomePage: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();

  const handleClickGroups = () => { 
    redirect('/groupList');
  }

  const handleClickStudents = () => { 
    redirect('/studentlist');
  }

  return (
    <React.Fragment>
      <div className={classes.bannerContainer}>
        <Image src="/banner.jpg" width="5000" height="1700"/>
        <div className={classes.buttons}>
          <Button 
            className={classes.groupButton}
            variant="contained"
            size="large"
            onClick={handleClickGroups}
          >
            View Groups
          </Button>
          <Button 
            className={classes.studentButton}
            variant="contained"
            size="large"
            onClick={handleClickStudents}
          >
            View Students
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default observer(HomePage); 