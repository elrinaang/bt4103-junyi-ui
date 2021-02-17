import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const names = [
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
    },
  },
  };
  

const AddStudentModal: React.FC<{closeAddStudentModal: () => void, open: boolean}> = (props) => {
  const { closeAddStudentModal, open } = props; 
  const classes = useStyles();

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  return (
    <Dialog open={open} onClose={closeAddStudentModal} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Add New Students</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Select the classes to enroll the students into.
        </DialogContentText>
        <FormControl className={classes.formControl}>
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
          >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
            <Checkbox color="primary" checked={personName.indexOf(name) > -1} />
            <ListItemText primary={name} />
            </MenuItem>
          ))}
          </Select>
        </FormControl>
      </DialogContent>
    <DialogActions>
      <Button onClick={closeAddStudentModal} color="primary">
      Cancel
      </Button>
      <Button onClick={closeAddStudentModal} color="primary">
      Confirm
      </Button>
    </DialogActions>
    </Dialog>
  );
};

export default AddStudentModal; 