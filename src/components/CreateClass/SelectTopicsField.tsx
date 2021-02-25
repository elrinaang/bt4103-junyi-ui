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

const SelectTopicsField: React.FC = () => {
  const classes = useStyles();
  const { appStore } = useStores();
  const selectedTopics = appStore.newClassTopics;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    appStore.setNewClassTopics(event.target.value as string[]);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select Topics
      </Typography>
      <FormControl className={classes.formControl}>
        <Select
          multiple
          value={selectedTopics}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(', ')}
        >
          {appStore.listOfTopics.map((topic) => (
            <MenuItem key={topic} value={topic}>
              <Checkbox checked={selectedTopics.indexOf(topic) > -1} color="primary"/>
              <ListItemText primary={topic} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default observer(SelectTopicsField);