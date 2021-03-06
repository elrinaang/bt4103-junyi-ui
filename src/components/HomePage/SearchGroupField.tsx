import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          padding: theme.spacing(2,2,2),
          marginBottom: theme.spacing(2),
          minWidth: '80%'
        },
        textField:{
          minWidth: '100%'
        },
        form: { 
          minWidth: '100%'
        }
  }),
);

const SearchGroupField: React.FC = () => {
  const classes = useStyles();
  const { appStore, uiState } = useStores();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const currentGroup = appStore.groupList.find(currGroup => currGroup.groupName == event.target.value); 
    uiState.setCurrentGroup(currentGroup);
    appStore.setFilteredStudentList(currentGroup);
  };

  return (
    <Paper elevation={0}>
      <Grid container alignItems="center" spacing={2} className={classes.root}>
        <Grid item xs={3}>
          <></>
        </Grid>
        <Grid item xs={4}>
          <form noValidate autoComplete="off" className={classes.form}>
            <TextField 
              //className={classes.textField} 
              id="outlined-basic" 
              label="Enter Group Name" 
              variant="outlined" 
              margin="dense"
              fullWidth
            />
          </form>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Search</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default observer(SearchGroupField);