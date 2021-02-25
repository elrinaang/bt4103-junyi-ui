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

const SelectClassField: React.FC = () => {
  const classes = useStyles();
  const { appStore, uiState } = useStores();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const currentClass = appStore.classList.find(currClass => currClass.className == event.target.value); 
    uiState.setCurrentClass(currentClass);
  };

  return (
    <Grid container direction="row">
        <Typography variant="h6">Class:</Typography>
        <FormControl className={classes.formControl}>
          <Select
            value={uiState.currentClass ? uiState.currentClass.className : ''}
            onChange={handleChange}
            margin="dense"
          >
            {
              appStore.classList.map((indivClass) =>
              <MenuItem key={indivClass.className} value={indivClass.className}>
                {indivClass.className}
              </MenuItem>)
            }
          </Select>
        </FormControl>
    </Grid>
  );
};

export default observer(SelectClassField);