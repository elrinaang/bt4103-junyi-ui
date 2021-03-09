import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import { IndivGroup } from '../../stores/AppStore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(2),
    minWidth: '100%'
  },
  root: {
    minWidth: 180,
    maxWidth: '70%',
    //backgroundColor:'#cefaaa',
    padding: theme.spacing(1,0,1),
    marginTop: theme.spacing(1)
  },
  cards:{
    marginTop: theme.spacing(2)
  },
  cardContent: { 
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center'
  },
  indivGroup: { 
    marginBottom: theme.spacing(4)
  }
}));

const clusters = ['cluster 1', 'cluster 2', 'cluster 3', 'cluster 4', 'cluster 5', 'cluster 6'];

const ClassDetails: React.FC = () => {

  const classes = useStyles();
  const { appStore } = useStores();

  return (
    <React.Fragment>
      {
        appStore.groupList.map((newGroup: IndivGroup) =>
        <div className={classes.indivGroup} key={newGroup.id}>
          <Typography variant="h6"><b>{newGroup.name}</b></Typography>
          <Grid container direction="row"> 
          {
            clusters.map((cluster: string) => 
              <Grid item xs={3} key={cluster}>
                <Card className={classes.root} square variant="outlined">
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6">
                      {cluster}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          )}
          </Grid>
        </div>) 
        }
    </React.Fragment>
  );
};

export default observer(ClassDetails); 