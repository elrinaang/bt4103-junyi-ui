import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { observer } from 'mobx-react';
import { useStores } from '../../stores/StoreProvider';

const ClassNameField: React.FC = () => {

  const { appStore } = useStores(); 
  const selectedClassName = appStore.newClassName; 

  const handleClassNameChange = (event: React.ChangeEvent) => { 
    const { value } =  event.target as HTMLInputElement;
    appStore.setNewClassName(value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Class Name
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form noValidate autoComplete="off">
            <TextField
              required
              id="address1"
              name="address1"
              label="Name of new class"
              onChange={handleClassNameChange}
              value={selectedClassName}
              fullWidth
            />
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default observer(ClassNameField);