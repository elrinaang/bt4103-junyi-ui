import { observable, action, computed, makeObservable} from 'mobx';
import { DataGrid, ColDef, RowsProp } from '@material-ui/data-grid';

export type IndivGroup = { 
  groupName: string; 
  nominalRoll?: Blob; 
  groupModules?: string[];  
  groupStudents?: any;
}

class AppStore {

  studentList: RowsProp; 
  filteredStudentList: RowsProp; 
  studentTableColumns: ColDef[];
  groupList: IndivGroup[];
  listOfModules: string[];
  
  //attributes needed to add new class 
  newGroup: IndivGroup;  
  newGroupName: string; 
  newGroupModules: string[]; 
  newGroupRoll: Blob; 
  newGroupStudents: any; 

  constructor() {
    makeObservable(this, {
      studentList: observable,
      filteredStudentList: observable, 
      studentTableColumns: observable,  
      groupList: observable,
      newGroup: observable,
      newGroupName: observable,
      newGroupModules: observable,
      newGroupRoll: observable, 
      newGroupStudents: observable, 
      listOfModules: observable, 
      addNewGroup: action, 
      setNewClass: action,
      setNewGroupName: action,
      setNewGroupModules: action,
      setNewGroupRoll: action,
      setNewGroupStudents: action,
      setFilteredStudentList: action 
    })
    
    this.studentList = []; 
    
    this.filteredStudentList = this.studentList; 

    this.studentTableColumns = [
      { field: 'id', headerName: 'ID', type: 'number', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'gender', headerName: 'Gender', width: 100 },
      { field: 'points', headerName: 'Points', type:'number', width: 100 },
      {
        field: 'badges_cnt',
        headerName: 'No.of Badges',
        type: 'number',
        width: 100,
      },
      { field: 'first_login_date_TW', headerName: 'First Login Date', width: 100 },
      { field: 'user_grade', headerName: 'User Grade', width: 70},
      { field: 'user_city', headerName: 'City', width: 100 }
    ];

    this.groupList = [];

    this.listOfModules = [
      'area',
      'perimeter',
      'division',
      'subtraction',
      'addition',
      'multiplication',
      'fractions',
      'percentage',
      'decimals'
    ];

    this.newGroup = null; 
    
    this.newGroupName = '';

    this.newGroupModules = [];

    this.newGroupRoll = null; 
    
    this.newGroupStudents = []; 
  }

  addNewGroup = () => { 
    const newlyCreatedGroup: IndivGroup = {
      groupName: this.newGroupName, 
      nominalRoll: this.newGroupRoll, 
      groupModules: this.newGroupModules,
      groupStudents: this.newGroupStudents
    }
    this.groupList.push(newlyCreatedGroup);
    console.log(newlyCreatedGroup);
  }; 

  setNewClass = () => { 
    //create a new class 
    const newlyCreatedClass: IndivGroup = {groupName: this.newGroupName, nominalRoll: this.newGroupRoll, groupModules: this.newGroupModules}
    this.newGroup = newlyCreatedClass; 
  };

  setNewGroupName = (name: string) => { 
    this.newGroupName = name; 
  };

  setNewGroupModules = (modules: string[]) => { 
    this.newGroupModules = modules; 
  };

  setNewGroupRoll = (roll:Blob) => { 
    this.newGroupRoll = roll; 
  }; 

  setNewGroupStudents = (students: any) => { 
    this.newGroupStudents = students; 
  };

  setFilteredStudentList = (selectedGroup: IndivGroup) => {
    //put the students in this class as the rowsprops 
    this.filteredStudentList = selectedGroup.groupStudents; 
  };

  addNewStudents = (newStudents: ColDef[]) => { 
    this.studentList = newStudents; 
  }; 

}

export default AppStore;