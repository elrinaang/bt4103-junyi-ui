import { observable, action, computed, makeObservable} from 'mobx';
import { DataGrid, ColDef, RowsProp } from '@material-ui/data-grid';

export type IndivClass = { 
  className: string; 
  nominalRoll?: Blob; 
  classTopics?: string[];  
}

class AppStore {

  studentList: RowsProp; 
  studentTableColumns: ColDef[];
  classList: IndivClass[];
  recentlyAddedClass: IndivClass[];
  listOfTopics: string[];
  
  //attributes needed to add new class 
  newClass: IndivClass;  
  newClassName: string; 
  newClassTopics: string[]; 
  newClassRoll: Blob; 

  constructor() {
    makeObservable(this, {
      studentList: observable,
      studentTableColumns: observable,  
      classList: observable,
      recentlyAddedClass: observable,
      newClass: observable,
      newClassName: observable,
      newClassTopics: observable,
      newClassRoll: observable, 
      listOfTopics: observable, 
      addNewClass: action, 
      setNewClass: action,
      setNewClassName: action,
      setNewClassTopics: action,
      setNewClassRoll: action
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

    this.classList = [{className: 'Class A'},
      {className: 'Class B'},
      {className: 'Class C'},
      {className: 'Class D'},
      {className: 'Class E'}
    ];

    this.listOfTopics = [
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

    this.recentlyAddedClass = [{className: 'New Class A'}];

    this.newClass = null; 
    
    this.newClassName = '';

    this.newClassTopics = [];

    this.newClassRoll = null; 
  }

  addNewClass = (newClass: IndivClass) => { 
    this.classList.push(newClass);
    this.recentlyAddedClass.push(newClass); 
  }; 

  setNewClass = () => { 
    //create a new class 
    const newlyCreatedClass: IndivClass = {className: this.newClassName, nominalRoll: this.newClassRoll, classTopics: this.newClassTopics}
    this.newClass = newlyCreatedClass; 
  };

  setNewClassName = (name: string) => { 
    this.newClassName = name; 
  };

  setNewClassTopics = (topics: string[]) => { 
    this.newClassTopics = topics; 
  };

  setNewClassRoll = (roll:Blob) => { 
    this.newClassRoll = roll; 
  }
}

export default AppStore;