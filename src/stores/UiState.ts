import { observable, action, computed, makeObservable} from 'mobx';
import { IndivGroup } from './AppStore';
import { ClusterType } from '../lib/Types';
import { individualClusterData } from '../individualClusterData';
import { individualStudentData } from '../individualStudentData';

export type AppStatus = 'RETRIEVING_INFORMATION' | 'RETRIEVED_INFORMATION' | 'NOT_APPLICABLE'

class UiState {

  errorMessage: string;
  currentGroup: string;
  currentCluster: ClusterType;
  currentGroupName: string;
  currentClusterID: string;
  currentStudent: any;
  appStatus: AppStatus;

  constructor() {
    makeObservable(this, {
      errorMessage: observable,
      currentGroup: observable,
      currentCluster: observable,
      currentStudent: observable,
      appStatus: observable,
      currentGroupName: observable,
      currentClusterID: observable,
      setErrorMessage: action,
      setCurrentGroup: action,
      setCurrentStudent: action,
      setCurrentCluster: action,
      setAppStatus: action
    })

    this.errorMessage = '';
    this.currentGroup = '';
    this.currentCluster = individualClusterData;

    ////FOR CONNECTION WITH BE CHANGE TO 'RETRIEVING_INFORMATION'
    this.appStatus = 'RETRIEVING_INFORMATION';
    this.currentStudent = null;
    this.currentClusterID = '',
    this.currentGroupName = ''
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

  setCurrentCluster = (selectedCluster: ClusterType) => {
    this.currentCluster = selectedCluster;
    console.log(this.currentCluster);
  }

  setAppStatus = (status: AppStatus) => {
    this.appStatus = status;
    console.log(this.appStatus);
  }
}

export default UiState;
