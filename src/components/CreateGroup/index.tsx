import * as React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import GroupNameField from './GroupNameField';
import SelectModulesField from './SelectModulesField';
import UploadFileField from './UploadFileField';
import useStyles from './useStyles';
import { useStores } from '../../stores/StoreProvider';
import redirect from '../../lib/redirect';

const steps = ['Group Name', 'Select Modules', 'Upload File'];

const getStepContent = (step: number) => { 
  switch (step) {
    case 0:
      return <GroupNameField />;
    case 1:
      return <SelectModulesField />;
    case 2:
      return <UploadFileField />;
    default:
      throw new Error('Unknown step');
  }
}

const CreateGroup: React.FC = () => {

  const classes = useStyles();

  const { appStore } = useStores();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => { 
    appStore.setNewClass();
    appStore.addNewClass(appStore.newGroup);
    //TODO: send to the BE

    //redirect to home page 
    redirect('/home');
    //housekeeping 
    appStore.setNewGroupName('');
    appStore.setNewGroupModules([]);
    appStore.setNewGroupRoll(null);
  }

  const NextButton = () => 
    <Button
      variant="contained"
      color="primary"
      onClick={handleNext}
      className={classes.button}
    > 
      Next
    </Button> 

  const SubmitButton = () => 
    <Button
      variant="contained"
      color="primary"
      onClick={handleSubmit}
      className={classes.button}
    > 
      Create Group
    </Button> 

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Create New Group
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
          <React.Fragment>
            {getStepContent(activeStep)}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              )}
              {activeStep === steps.length - 1 ? <SubmitButton/> : <NextButton/>}
            </div>
          </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
};

export default CreateGroup; 