import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid, ColDef, RowsProp } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SelectGroupField from './SelectGroupField';
import { useStores } from '../../stores/StoreProvider';
import { observer } from 'mobx-react';
import RetrievingInfo from '../common/RetrievingInfo';
import { getStudents, getStudentDetail, getStudentsByGroup } from '../../api/studentService';
import { getGroups } from '../../api/groupService';
import redirect from '../../lib/redirect';

const useStyles = makeStyles(theme => ({
  retrievingInfo: {
    marginTop: theme.spacing(2)
  },
  circularInfo: {
    marginTop: theme.spacing(1)
  }
}));

const StudentList: React.FC = () => {

  const classes = useStyles();
  const { appStore, uiState } = useStores();
  const [openSnackBar, handleOpenSnackBar] = React.useState(true);


  //UNCOMMENT FOR CONNECTION WITH BE
  React.useEffect(() => {
    async function fetchStudents() {
      uiState.setAppStatus('RETRIEVING_INFORMATION');

      let groups = await getGroups();
      appStore.setGroups(groups);
      //get the first pre-set group
      uiState.setCurrentGroup(appStore.groupList[0].name);
      const currentGroup = appStore.groupList.find(group => group.name == uiState.currentGroup);
      let students = await getStudentsByGroup(currentGroup.id);
      appStore.studentList = students;
      uiState.setAppStatus('RETRIEVED_INFORMATION');
    }

    fetchStudents();
  }, []);

  const onSelectStudent = async (studentId: any) => {
    //get the student detail from the backend
    //const student = await getStudentDetail(studentId);
    //uiState.setCurrentStudent(student);
    //redirect(`/student?id=${student.id}`);
    redirect(`/student?id=${uiState.currentStudent.id}`);
  };

  const handleCloseSnackBar = () => {
    handleOpenSnackBar(false);
  };

  return (
    <React.Fragment>
      <Grid container direction="column" spacing={3}>
        <Grid item xs={12}>
          <SelectGroupField/>
        </Grid>
        {
          uiState.appStatus == 'RETRIEVING_INFORMATION'
          ? <RetrievingInfo/>
          : <Grid item xs={12}>
              <div style={{ display: 'flex', flexGrow: 1 }}>
                <DataGrid
                  rows={appStore.filteredStudentList?.length > 0 ? appStore.filteredStudentList : appStore.studentList}
                  columns={appStore.studentTableColumns}
                  pageSize={5}
                  autoHeight
                  onRowClick={(val) => onSelectStudent(val.row.id)}
                />
              </div>
            </Grid>
        }
      </Grid>
      {
        appStore.groupList.length > 0 &&
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={openSnackBar}
          autoHideDuration={6000}
          onClose={handleCloseSnackBar}
          message="Click on individual student to view more details"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackBar}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      }
    </React.Fragment>
  );
};

export default observer(StudentList);
