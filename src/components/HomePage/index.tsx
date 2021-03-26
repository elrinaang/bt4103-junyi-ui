import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import redirect from '../../lib/redirect';
import GeneralInfo from './GeneralInfo';
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
    marginLeft: theme.spacing(5)
  },
  buttons: { 
    position: 'absolute',
    top: '75%',
    left: '50%',
    display: 'inline-block',
    transform: 'translate(-50%, -50%)'
  },
  image: { 
    opacity: '0.9'
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
        <Image src="/banner.jpg" width="5000" height="1700" className={classes.image}/>
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
      <GeneralInfo/>
    </React.Fragment>
  );
};

export default observer(HomePage); 