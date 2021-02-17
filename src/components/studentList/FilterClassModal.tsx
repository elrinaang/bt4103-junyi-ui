import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const classNames = [
  'area',
  'subtraction',
  'addition',
  'division',
  'multiplication',
  'perimeter',
  'fractions',
  'decimals',
  'percentage'
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  select: {
    minWidth: '40%'
  },
  paper: {
      //flexGrow: 1,
      marginTop: 10,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  }),
  
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    },
  },
  };
  

const AddStudentModal: React.FC<{closeFilterClassModal: () => void, open: boolean}> = (props) => {
  const { closeFilterClassModal, open } = props; 
  const classes = useStyles();

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  return (
    <Dialog open={open} onClose={closeFilterClassModal} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Filter Classes</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Select the classes that you are interested in. 
        </DialogContentText>
      <form 
        noValidate 
        autoComplete="off" 
      >
        <Grid 
          container 
          spacing={3} 
          direction="row"
        >
          <Grid item xs={12}>
            <InputLabel id="demo-mutiple-checkbox-label">Classes</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<Input />}
              renderValue={(selected) => (selected as string[]).join(', ')}
              MenuProps={MenuProps}
              autoWidth
              className={classes.select}
            >
              {classNames.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeFilterClassModal} color="primary">
          Cancel
        </Button>
        <Button onClick={closeFilterClassModal} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddStudentModal; 