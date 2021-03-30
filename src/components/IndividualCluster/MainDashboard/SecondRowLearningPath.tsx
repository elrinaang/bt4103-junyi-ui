import * as React from 'react';
import { createStyles, Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
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
import { PathType } from '../../../lib/Types';

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
  },
  noPath: {
    marginTop: theme.spacing(10),
    width: '100%',
    textAlign: 'center'
  },
  stepIcon: {
    color: '#333366'
  }
}));

const steps = ['Addition', 'Substraction','Multiplication','Division', 'Area','Perimeter'];

const SecondRowLearningPath: React.FC = () => {

  const { uiState, appStore } = useStores();
  const classes = useStyles();
  const theme = useTheme();
  const currentClusterLearningPaths = uiState.currentCluster.paths;

  const [filter, setFilter] = React.useState('popularity');
  const [activeStep, setActiveStep] = React.useState(0);
  const [currentLearningPath, setCurrentLearningPath] = React.useState([]);

  React.useEffect(() => getCurrentLearningPath('popularity',1),[]);

  const getCurrentLearningPath = (filter: string, rank: number) => {
    //filter by filter - popularity and performance
    console.log(filter,rank);
    const filteredPath: PathType[] = currentClusterLearningPaths.filter(exercise => exercise.policy === filter);
    const finalPath: PathType[] = filteredPath.filter(exercise => exercise.rank === rank.toString());
    console.log(finalPath);
    const learningPath: string[] = finalPath.map(exercise => `Exercise ${exercise.content_id}`);
    console.log(learningPath);
    learningPath && setCurrentLearningPath(learningPath);
    };

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setFilter(event.target.value as string);
    getCurrentLearningPath(event.target.value,activeStep+1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    getCurrentLearningPath(filter, activeStep + 2 );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    getCurrentLearningPath(filter,activeStep);
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <h2 className={classes.headerName}><b>Possible Learning Paths</b></h2>
      <div className={classes.selectFieldContainer}>
        <div style={{display: 'inline-block',float:'right'}}>
            <FormControl className={classes.formControl}>
              <Select
              value={filter}
              onChange={handleChange}
              >
                <MenuItem value={'popularity'}>popularity</MenuItem>
                <MenuItem value={'performance'}>performance</MenuItem>
              </Select>
            </FormControl>
        </div>
        <h3 style={{display: 'inline-block',float:'right'}}>Generate by:</h3>
      </div>
      {
        currentLearningPath.length > 0
        ? <Stepper className={classes.learningPath} alternativeLabel>
            {currentLearningPath.map((exercise: string) => {
              return (
                <Step key={exercise}>
                  <StepLabel StepIconProps={{classes:{root: classes.stepIcon}}}>{exercise}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        : <div className={classes.noPath}><h4 style={{color: 'grey'}}>No Learning Path Generated</h4></div>
      }
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
