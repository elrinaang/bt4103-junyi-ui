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
import Papa from 'papaparse';
import { createGroup, getGroups } from '../../api/groupService';

const steps = ['Group Name', 'Select Modules', 'Upload File'];

const CreateGroup: React.FC = () => {

  const classes = useStyles();

  const { appStore } = useStores();

  const [activeStep, setActiveStep] = React.useState(0);

  const getStepContent = (step: number) => { 
    switch (step) {
      case 0:
        return <GroupNameField handleNextStep={handleNext}/>;
      case 1:
        return <SelectModulesField />;
      case 2:
        return <UploadFileField />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const parseFile = () => { 
    Papa.parse(appStore.newGroupRoll,{
      header: true,
        download: true,
        skipEmptyLines: true,
        complete: function(results) {
          //send to the BE 
          const res = results.data.map((item) => {
            return item.id
          });
          //find the correct ids of the modules and send back 
          const listOfModules = appStore.newGroupModules.map((name: string) => appStore.listOfModules.find(module => module.name == name).id); 
          createGroup(appStore.newGroupName,res, listOfModules); 
        }
    })
  }

  const handleSubmit = async () => { 
    //use papaparse to read the file to put in student list
    parseFile();
    //get the new group of students 
    let groups = await getGroups();
    appStore.setGroups(groups);
    //redirect to home page 
    redirect('/groupList');
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