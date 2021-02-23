import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useStores } from '../../stores/StoreProvider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginLeft: theme.spacing(1),
      minWidth: '18%',
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }),
);

const SelectClassField: React.FC = () => {
  const classes = useStyles();
  const { appStore } = useStores();
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <Grid container direction="row">
        <Typography variant="h6">Class:</Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            margin="dense"
          >
            {
              appStore.classList.map((selectedClass) =>
              <MenuItem key={selectedClass.className}>
                {selectedClass.className}
              </MenuItem>)
            }
          </Select>
        </FormControl>
    </Grid>
  );
};

export default SelectClassField;