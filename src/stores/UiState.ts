import { observable, action, computed, makeObservable} from 'mobx';
import { IndivGroup } from './AppStore';

class UiState {

  errorMessage: string;  
  currentGroup: IndivGroup; 

  constructor() {
    makeObservable(this, {
      errorMessage: observable,
      currentGroup: observable,  
      setErrorMessage: action,
      setCurrentGroup: action
    })
    
    this.errorMessage = '';
    this.currentGroup = {groupName:''};
  }

  setErrorMessage = (message: string) => { 
    this.errorMessage = message; 
  };

  setCurrentGroup = (selectedGroup: IndivGroup) => { 
    this.currentGroup = selectedGroup; 
    console.log(this.currentGroup);
  }
}

export default UiState;