import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const UploadFileField: React.FC = () => {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload File
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Name of new class"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default UploadFileField;