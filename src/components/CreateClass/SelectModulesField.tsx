import React from 'react';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './useStyles';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';

const SelectModulesField: React.FC = () => {
  const classes = useStyles();
  const { appStore } = useStores();
  const selectedModules = appStore.newClassModules;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    appStore.setNewClassModules(event.target.value as string[]);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select Modules
      </Typography>
      <FormControl className={classes.formControl}>
        <Select
          multiple
          value={selectedModules}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(', ')}
        >
          {appStore.listOfModules.map((module) => (
            <MenuItem key={module} value={module}>
              <Checkbox checked={selectedModules.indexOf(module) > -1} color="primary"/>
              <ListItemText primary={module} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default observer(SelectModulesField);