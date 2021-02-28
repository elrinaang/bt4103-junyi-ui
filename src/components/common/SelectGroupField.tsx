import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(0.5),
      minWidth: '10%',
    }
  }),
);

const SelectGroupField: React.FC = () => {
  const classes = useStyles();
  const { appStore, uiState } = useStores();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const currentGroup = appStore.groupList.find(currGroup => currGroup.groupName == event.target.value); 
    uiState.setCurrentGroup(currentGroup);
  };

  return (
    <Grid container direction="row">
        <Typography variant="h6">Group:</Typography>
        <FormControl className={classes.formControl}>
          <Select
            value={uiState.currentGroup ? uiState.currentGroup.groupName : ''}
            onChange={handleChange}
            margin="dense"
          >
            {
              appStore.groupList.map((group) =>
              <MenuItem key={group.groupName} value={group.groupName}>
                {group.groupName}
              </MenuItem>)
            }
          </Select>
        </FormControl>
    </Grid>
  );
};

export default observer(SelectGroupField);