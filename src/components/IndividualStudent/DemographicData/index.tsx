import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
    predAccuracyTitle: { 
      display: 'inline-block',
      margin: theme.spacing(3,2,3)
    },
    predAccuracyValue: { 
      display: 'inline-block',
      float: 'right',
      margin: theme.spacing(2,2,2),
      color: theme.palette.info.main
    },
    root: { 
      marginTop: theme.spacing(2)
    },
    problemTypes: { 
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    text: { 
      color: theme.palette.info.main
    },
    indivStat: { 
      textAlign: 'center',
      padding: theme.spacing(2,0,2)
    },
    timeContent: { 
      top: '50%',
      msTransform: 'translateY(50%)',
      transform: 'translateY(20%)'
    }
  }));

const DemographicData: React.FC = () => {

    const { uiState, appStore } = useStores(); 
    const classes = useStyles();
    const currentStudent = uiState.currentStudent;
    
    return (
      <div className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={3}>
            <Image src="/studentImage.jpg" width="175" height="175"/>
        </Grid>
      </Grid>
      </div>
    );
  };
  
  export default observer(DemographicData);