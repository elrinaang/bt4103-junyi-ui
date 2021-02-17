import * as React from 'react';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { DataGrid, ColDef, RowsProp } from '@material-ui/data-grid';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  addStudentButton: { 
    float: 'right'
  }
}));

const columns: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  }
];

const rows: RowsProp = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const StudentList: React.FC = () => {

  const classes = useStyles();
  const [open, handleOpen] = React.useState(true);

  const onSelectStudent = (id: number | string) => { 
    console.log(id);
  }

  const handleCloseSnackBar = () => { 
    handleOpen(false);
  }

  return (
    <>
    <Grid container direction="row" spacing={3}>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" className={classes.addStudentButton}>
          Add New Students
        </Button>
      </Grid> 

      <Grid item xs={12}>
        <div style={{ display: 'flex', flexGrow: 1 }}>
          <DataGrid 
            rows={rows} 
            columns={columns} 
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
      open={open}
      autoHideDuration={6000}
      onClose={handleCloseSnackBar}
      message="Click on individual student to view more details"
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackBar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
      />
    </>
  );
};

export default StudentList; 