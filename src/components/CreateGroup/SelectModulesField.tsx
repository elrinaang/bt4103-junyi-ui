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
import { ModuleType } from '../../stores/AppStore';
import { observer } from 'mobx-react';

const SelectModulesField: React.FC = () => {
  const classes = useStyles();
  const { appStore } = useStores();
  const selectedModules = appStore.newGroupModules;

  React.useEffect(() => appStore.setNewGroupModules([]),[]); 

  const handleChange = (event: React.ChangeEvent<{ value: string[] }>) => {
    //get the list of module from the module ID 
    appStore.setNewGroupModules(event.target.value as string[]);
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
          MenuProps={{
            getContentAnchorEl: () => null,
          }}
        >
          {appStore.listOfModules.map((module: ModuleType) => (
            <MenuItem key={module.id} value={module.name}>
              <Checkbox checked={selectedModules.indexOf(module.name) > -1} color="primary"/>
              <ListItemText primary={module.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default observer(SelectModulesField);