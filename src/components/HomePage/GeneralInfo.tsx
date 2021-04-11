import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import GroupIcon from '@material-ui/icons/Group';
import BarChartIcon from '@material-ui/icons/BarChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import ClusterStudentInfo from './ClusterStudentInfo';
import StudentDataInfo from './StudentDataInfo';
import LearningPathInfo from './LearningPathInfo';

const useStyles = makeStyles((theme) => ({
  learningAnalytics: { 
    padding: theme.spacing(1,3,6)
  },
  iconGroup: { 
    backgroundColor: 'white'
  },
  indivIcon: { 
    textAlign: 'center',
    alignSelf: 'center',
    padding: theme.spacing(2,0,2)
  },
  tabContent:{ 
    backgroundColor: 'white'
  },
  tab: { 
    paddingBottom: theme.spacing(4)
  },
  iconGroupTitle: { 
    padding: theme.spacing(1,3,2),
    backgroundColor: 'white'
  }
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
};

function TabPanel(props: TabPanelProps) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3} className={classes.tabContent}>
            {children}
          </Box>
        )}
      </div>
    );
  }


const GeneralInfo: React.FC = () => {

  const { uiState, appStore } = useStores(); 
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Grid container direction="column">
      <Grid item className={classes.learningAnalytics}>
        <h1>What is Learning Analytics?</h1>
        <Typography>Learning analytics is the <b>measurement</b>, <b>collection</b>, <b>analysis</b> and <b>reporting</b> of data and their contexts for the purposes of understanding and optimising learning and the environments in which it occurs.</Typography>
        <br/>
        <Typography>With Learning Analytics, trainers can benefit from learning more about how students learn and <b>tailor their curriculum to fit students' needs</b>. At the same time, students are also able to benefit from having a more <b>personalised learning experience</b>.</Typography>
      </Grid> 
      <Grid item className={classes.iconGroupTitle}>
        <h1>What can you do?</h1>
      </Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        className={classes.iconGroup}
      >
        <Tab icon={<GroupIcon fontSize="large"/>} label="Cluster Students" className={classes.tab}/>
        <Tab icon={<BarChartIcon fontSize="large"/>} label="View Student Data" className={classes.tab}/>
        <Tab icon={<TimelineIcon fontSize="large"/>} label="Generate Learning Paths" className={classes.tab}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <ClusterStudentInfo/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StudentDataInfo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LearningPathInfo/>
      </TabPanel>
    </Grid>
  );
};

export default observer(GeneralInfo); 