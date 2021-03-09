import { observable, action, computed, makeObservable} from 'mobx';
import { IndivGroup } from './AppStore';

class UiState {

  errorMessage: string;  
  currentGroup: IndivGroup; 
  currentStudent: any; 

  constructor() {
    makeObservable(this, {
      errorMessage: observable,
      currentGroup: observable,
      currentStudent: observable,  
      setErrorMessage: action,
      setCurrentGroup: action,
      setCurrentStudent: action
    })
    
    this.errorMessage = '';
    this.currentGroup = {name:''};
    this.currentStudent = null; 
  }

  setErrorMessage = (message: string) => { 
    this.errorMessage = message; 
  };

  setCurrentGroup = (selectedGroup: IndivGroup) => { 
    this.currentGroup = selectedGroup; 
    console.log(this.currentGroup);
  };

  setCurrentStudent = (student: any) => { 
    this.currentStudent = student; 
    console.log(this.currentStudent);
  }
}

export default UiState;