import { observable, action, computed, makeObservable} from 'mobx';
import { DataGrid, ColDef, RowsProp } from '@material-ui/data-grid';

class AppStore {

  studentList: string[]; 
  studentTableColumns: ColDef[];

  constructor() {
    makeObservable(this, {
      studentList: observable,
      studentTableColumns: observable, 
      addStudents: action 
    })
    
    this.studentList = []; 
    this.studentTableColumns = [
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
  }

  addStudents = (student: string) => { 
    this.studentList.push(student)
  }
}

export default AppStore;