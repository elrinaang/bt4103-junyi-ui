import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Avatar from '@material-ui/core/Avatar';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';
import SecondRowLearningPath from './SecondRowLearningPath';
import SecondRowStudentAccuarcy from './SecondRowStudentAccuracy';


const useStyles = makeStyles(theme => ({
    root:{ 
        padding: theme.spacing(0,5,0),
        marginBottom: theme.spacing(1.5)
      },
      indivStat: { 
        textAlign: 'center',
        alignSelf: 'center',
        padding: theme.spacing(2,0,2)
      },
      text: { 
        color: theme.palette.info.main
      },
      header: { 
        color: theme.palette.primary.main,
        padding: theme.spacing(1,2,1)
      },
      avatar: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: theme.spacing(0.5,0,0.5)
     },
     headerContainer: { 
       marginBottom: theme.spacing(1)
     }
}));


const SecondRow: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();

  return (
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} xl={6}>
          <SecondRowLearningPath/>
        </Grid> 
        <Grid item xs={6} xl={3}>
            <SecondRowStudentAccuarcy/>
        </Grid>
      </Grid>
  );
};

export default observer(SecondRow);