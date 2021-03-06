import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { observer } from 'mobx-react';
import { useStores } from '../../stores/StoreProvider';

export interface CreateGroupProps{ 
  handleNextStep: () => void
}

const GroupNameField: React.FC<CreateGroupProps> = (props) => {

  const { appStore } = useStores(); 
  const selectedGroupName = appStore.newGroupName; 

  React.useEffect(() => appStore.setNewGroupName(''),[]); 

  const handleGroupNameChange = (event: React.ChangeEvent) => { 
    const { value } =  event.target as HTMLInputElement;
    appStore.setNewGroupName(value);
  };

  const handleSubmit = (event: React.FormEvent) => { 
    event.preventDefault(); 
    props.handleNextStep();
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Group Name
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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