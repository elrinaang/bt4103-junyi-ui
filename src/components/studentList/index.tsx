import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid, ColDef, RowsProp } from '@material-ui/data-grid';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SelectGroupField from '../common/SelectGroupField';
import { useStores } from '../../stores/StoreProvider';

const useStyles = makeStyles(theme => ({
  filterClassButton: { 
    float: 'right'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const StudentList: React.FC = () => {

  const classes = useStyles();
  const { appStore } = useStores();
  const [openSnackBar, handleOpenSnackBar] = React.useState(true);

  const onSelectStudent = (id: number | string) => { 
    console.log(id);
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

        <Grid item xs={12}>
          <div style={{ display: 'flex', flexGrow: 1 }}>
            <DataGrid 
              rows={appStore.studentList} 
              columns={appStore.studentTableColumns} 
              pageSize={5} 
              autoHeight
              onRowClick={(val) => onSelectStudent(val.row.id)}
            />
          </div>
        </Grid>
      </Grid>

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
    </React.Fragment>
  );
};

export default StudentList; 