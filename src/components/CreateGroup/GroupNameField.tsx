import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { observer } from 'mobx-react';
import { useStores } from '../../stores/StoreProvider';

const GroupNameField: React.FC = () => {

  const { appStore } = useStores(); 
  const selectedGroupName = appStore.newGroupName; 

  const handleGroupNameChange = (event: React.ChangeEvent) => { 
    const { value } =  event.target as HTMLInputElement;
    appStore.setNewGroupName(value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Group Name
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form noValidate autoComplete="off">
            <TextField
              required
              id="address1"
              name="address1"
              label="Name of new group"
              onChange={handleGroupNameChange}
              value={selectedGroupName}
              fullWidth
            />
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default observer(GroupNameField);