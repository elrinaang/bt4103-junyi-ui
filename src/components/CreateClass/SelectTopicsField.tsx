import React from 'react';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '90%',
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

const topics = [
  'area',
  'perimeter',
  'division',
  'subtraction',
  'addition',
  'multiplication',
  'fractions',
  'percentage',
  'decimals'
];

const SelectTopicsField: React.FC = () => {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select Topics
      </Typography>
      <FormControl className={classes.formControl}>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(', ')}
        >
          {topics.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} color="primary"/>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default SelectTopicsField;