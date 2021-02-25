import { observable, action, computed, makeObservable} from 'mobx';
import { IndivClass } from './AppStore';

class UiState {

  errorMessage: string;  
  currentClass: IndivClass; 

  constructor() {
    makeObservable(this, {
      errorMessage: observable,
      currentClass: observable,  
      setErrorMessage: action,
      setCurrentClass: action
    })
    
    this.errorMessage = '';
    this.currentClass = {className:''};
  }

  setErrorMessage = (message: string) => { 
    this.errorMessage = message; 
  };

  setCurrentClass = (selectedClass: IndivClass) => { 
    this.currentClass = selectedClass; 
    console.log(this.currentClass);
  }
}

export default UiState;