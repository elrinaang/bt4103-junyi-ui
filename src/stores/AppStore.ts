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
    
    this.studentList = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    ];; 

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

    this.groupList = [{groupName: 'Group A'},
      {groupName: 'Group B'},
      {groupName: 'Group C'},
      {groupName: 'Group D'},
      {groupName: 'Group E'}
    ];

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

    this.recentlyAddedGroups = [{groupName: 'New Group A'}];

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
  }
}

export default AppStore;