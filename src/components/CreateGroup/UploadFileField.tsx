import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useStores } from '../../stores/StoreProvider';

const UploadFileField: React.FC = () => {

  const fileRef = React.useRef();
  const { appStore } = useStores();
  const [ file, setFile ] = React.useState(null);

  React.useEffect(() => appStore.setNewGroupRoll(null),[]); 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!event.target.files) return;    
    setFile(event.target.files[0]);      
    appStore.setNewGroupRoll(event.target.files[0]);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload File (*in CSV format)
      </Typography>
      <form 
        noValidate 
        autoComplete="off" 
      >
        <Grid 
          container 
          spacing={1} 
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={9}>
            <Input 
              id="select-file"
              ref={fileRef}
              type="file" 
              inputProps={{accept: ".csv"}}              
              onChange={handleFileChange}      
              style={{ display: "none" }}        
            />
            <TextField          
              label="Selected File"                
              value={file ? file.name : "No file selected"}
              InputProps={{
              readOnly: true,
              }}
              fullWidth
            />            
          </Grid>
          <Grid item xs={3}>
            <InputLabel htmlFor="select-file">
              <Button variant="contained" component="span">
                Select File
              </Button>
            </InputLabel>
          </Grid>  
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default UploadFileField;