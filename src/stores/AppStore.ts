import { observable, action, computed, makeObservable} from 'mobx';
import { DataGrid, ColDef, RowsProp } from '@material-ui/data-grid';

export type IndivGroup = { 
  groupName: string; 
  nominalRoll?: Blob; 
  groupModules?: string[];  
}

class AppStore {

  studentList: RowsProp; 
  studentTableColumns: ColDef[];
  groupList: IndivGroup[];
  recentlyAddedGroups: IndivGroup[];
  listOfModules: string[];
  
  //attributes needed to add new class 
  newGroup: IndivGroup;  
  newGroupName: string; 
  newGroupModules: string[]; 
  newGroupRoll: Blob; 

  constructor() {
    makeObservable(this, {
      studentList: observable,
      studentTableColumns: observable,  
      groupList: observable,
      recentlyAddedGroups: observable,
      newGroup: observable,
      newGroupName: observable,
      newGroupModules: observable,
      newGroupRoll: observable, 
      listOfModules: observable, 
      addNewClass: action, 
      setNewClass: action,
      setNewGroupName: action,
      setNewGroupModules: action,
      setNewGroupRoll: action
    })
    
    this.studentList = []; 

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
      }
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

    this.recentlyAddedGroups = [];

    this.newGroup = null; 
    
    this.newGroupName = '';

    this.newGroupModules = [];

    this.newGroupRoll = null; 
  }

  addNewClass = (newGroup: IndivGroup) => { 
    this.groupList.push(newGroup);
    this.recentlyAddedGroups.push(newGroup); 
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

  addNewStudents = (newStudents: ColDef[]) => { 
    this.studentList = newStudents; 
  }
}

export default AppStore;