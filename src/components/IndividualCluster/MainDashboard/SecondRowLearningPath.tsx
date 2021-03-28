import * as React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepButton from '@material-ui/core/StepButton';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useStores } from '../../../stores/StoreProvider';
import { observer } from 'mobx-react';

const useStyles = makeStyles(theme => ({
    root: { 
      padding: theme.spacing(0,2,2),
      height: '100%'
    },
    headerName: { 
      marginLeft: theme.spacing(2),
      paddingTop: theme.spacing(3)
    },
    formControl: {
      margin: theme.spacing(1.5,1,0),
      minWidth: 120,
    },
    mobileStepper: { 
      flexGrow: 1,
      width: '100%',
      backgroundColor: 'white'
    },
    learningPath: { 
      width: '100%',
      margin: theme.spacing(0,0,3)
    },
    selectFieldContainer: { 
      marginBottom: theme.spacing(2)
    }
}));

const steps = ['Addition', 'Substraction','Multiplication','Division', 'Area','Perimeter'];

const SecondRowLearningPath: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();
  const theme = useTheme();

  const [age, setAge] = React.useState('');
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <h2 className={classes.headerName}><b>Possible Learning Paths</b></h2>
      <div className={classes.selectFieldContainer}>
        <div style={{display: 'inline-block',float:'right'}}>
            <FormControl className={classes.formControl}>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                >
                  <MenuItem value={10}>Popularity</MenuItem>
                  <MenuItem value={20}>Option 2</MenuItem>
                  <MenuItem value={30}>Option 3</MenuItem>
                </Select>
            </FormControl>
        </div>
        <h3 style={{display: 'inline-block',float:'right'}}>Generate by:</h3>
      </div>
      <Stepper className={classes.learningPath} alternativeLabel>
      {steps.map((label: string) => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
      </Stepper>
        <MobileStepper
          variant="dots"
          position="static"
          steps={5}
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
    </Paper>
  );
};

export default observer(SecondRowLearningPath);