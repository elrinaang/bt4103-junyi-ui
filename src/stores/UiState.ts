import { observable, action, computed, makeObservable} from 'mobx';
import { IndivGroup } from './AppStore';

export type AppStatus = 'RETRIEVING_INFORMATION' | 'RETRIEVED_INFORMATION' | 'NOT_APPLICABLE'

class UiState {

  errorMessage: string;  
  currentGroup: string;
  currentCluster: string; 
  currentStudent: any;
  appStatus: AppStatus;

  constructor() {
    makeObservable(this, {
      errorMessage: observable,
      currentGroup: observable,
      currentCluster: observable,
      currentStudent: observable,  
      appStatus: observable,
      setErrorMessage: action,
      setCurrentGroup: action,
      setCurrentStudent: action,
      setCurrentCluster: action,
      setAppStatus: action 
    })
    
    this.errorMessage = '';
    this.currentGroup = 'test group 1';
    this.currentCluster = '';
    this.appStatus = 'RETRIEVING_INFORMATION';
    this.currentStudent = null; 
  }

  setErrorMessage = (message: string) => { 
    this.errorMessage = message; 
  };

  setCurrentGroup = (groupName: string) => { 
    this.currentGroup = groupName; 
  };

  setCurrentStudent = (student: any) => { 
    this.currentStudent = student; 
    console.log(this.currentStudent);
  };

  setCurrentCluster = (clusterName: string) => { 
    this.currentCluster = clusterName;
    console.log(this.currentCluster);
  }

  setAppStatus = (status: AppStatus) => { 
    this.appStatus = status; 
    console.log(this.appStatus);
  }
}

export default UiState;