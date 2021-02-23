import { observable, action, computed, makeObservable} from 'mobx';
import { IndivClass } from './AppStore';

class UiState {

  errorMessage: string;  
  currentClass: IndivClass | null; 

  constructor() {
    makeObservable(this, {
      errorMessage: observable,
      currentClass: observable,  
      setErrorMessage: action,
      setCurrentClass: action
    })
    
    this.errorMessage = '';
    this.currentClass = null;
  }

  setErrorMessage = (message: string) => { 
    this.errorMessage = message; 
  };

  setCurrentClass = (selectedClass: IndivClass) => { 
    this.currentClass = selectedClass; 
  }
}

export default UiState;