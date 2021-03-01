import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Alert from '@material-ui/lab/Alert';
import { useStores } from '../../stores/StoreProvider';
import { IndivGroup } from '../../stores/AppStore';
import { Observer, observer } from 'mobx-react';

const useStyles = makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  root: {
    minWidth: 180,
    maxWidth: '70%',
    //backgroundColor:'#cefaaa',
    borderColor: theme.palette.secondary.light,
    borderWidth: 2,
    padding: theme.spacing(1,0,1)
  },
  cards:{
    marginTop: theme.spacing(2)
  },
  cardContent: { 
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center'
  },
  infoMsg: {
    marginBottom: theme.spacing(2)
  }
}));

const RecentlyAddedClass: React.FC = () => {

  const classes = useStyles();
  const { appStore } = useStores();

  return (
    <React.Fragment>
      <Typography variant="h6"><b>Recently Added Groups</b></Typography>
      <Paper className={classes.paper} square>
        <Alert severity="info" className={classes.infoMsg}>Click on each group to view more details</Alert>
        <Grid container direction="row" spacing={3}> 
        {
          appStore.recentlyAddedGroups.map((newGroup: IndivGroup) =>
          <Grid item xs={3} key={newGroup.groupName}>
            <Card variant="outlined" className={classes.root} square>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6">
                  <b>{newGroup.groupName}</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>) 
        }
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default observer(RecentlyAddedClass); 