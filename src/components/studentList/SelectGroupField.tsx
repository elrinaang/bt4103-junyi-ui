import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import { getStudentsByGroup } from '../../api/studentService';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginLeft: theme.spacing(1),
      //marginTop: theme.spacing(0.5),
      minWidth: '20%',
    },
    root: {
      padding: theme.spacing(3,3,3)
    }
  }),
);

const SelectGroupField: React.FC = () => {
  const classes = useStyles();
  const { appStore, uiState } = useStores();

  const handleChange =  async(event: React.ChangeEvent<{ value: number }>) => {
    const currentGroup = appStore.groupList.find(group => group.id == event.target.value); 
    console.log(currentGroup);
    const currentGroupStudents = await getStudentsByGroup(event.target.value);
    uiState.setCurrentGroup(currentGroup.name);
    appStore.setFilteredStudentList(currentGroupStudents);
  };

  return (
    <Paper elevation={0}>
      <Grid container direction="row" className={classes.root} alignItems="center">
      <Typography variant="h6">Group:</Typography>
      <FormControl className={classes.formControl}>
        <Select
          value={uiState.currentGroup}
          onChange={handleChange}
          margin="dense"
          variant="outlined"
        >
          {
            appStore.groupList.map((group) =>
            <MenuItem key={group.id} value={group.id}>
              {group.name}
            </MenuItem>)
          }
        </Select>
      </FormControl>
    </Grid>
    </Paper>
  );
};

export default observer(SelectGroupField);
