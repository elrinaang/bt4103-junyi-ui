import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useStores } from '../../stores/StoreProvider';
import { IndivClass } from '../../stores/AppStore';
import { Observer, observer } from 'mobx-react';

const useStyles = makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(2),
    minWidth: '100%'
  },
  root: {
    minWidth: 275,
    backgroundColor:'#cefaaa'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cards:{
    marginTop: theme.spacing(2)
  }
}));

const RecentlyAddedClass: React.FC = () => {

  const classes = useStyles();
  const { appStore } = useStores();

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Typography variant="button"><b>Recently Added Class</b></Typography>
        <Grid container direction="row" spacing={3} className={classes.cards}> 
          <Observer render={() =>
          <>
          {
          appStore.recentlyAddedClass.map((newClass: IndivClass) =>
            <Grid item xs={3} key={newClass.className}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h4">
                    {newClass.className}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View more details</Button>
                </CardActions>
              </Card>
            </Grid>)  
          }
          </>
          }/>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default RecentlyAddedClass; 