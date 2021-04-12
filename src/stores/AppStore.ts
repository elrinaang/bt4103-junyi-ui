import { observable, action, computed, makeObservable} from 'mobx';
import { DataGrid, ColDef, RowsProp } from '@material-ui/data-grid';
import { groupListData } from '../groupListData';
import { studentListData } from '../studentListData';
import { ClusterInformationType } from '../lib/Types';

export type IndivGroup = {
  id: number,
  name: string,
  no_students: string, 
  avg_accuracy: string, 
  avg_exercises_attempted: string, 
  avg_problems_attempted: string
};

export type ModuleType = {
  name: string; 
  id: string; 
}

class AppStore {

  studentList: RowsProp;
  filteredStudentList: RowsProp;
  studentTableColumns: ColDef[];
  groupList: IndivGroup[];
  listOfModules: ModuleType[];
  listOfClusters: ClusterInformationType[];
  //attributes needed to add new class
  newGroupName: string;
  newGroupModules: string[];
  newGroupRoll: Blob;

  constructor() {
    makeObservable(this, {
      studentList: observable,
      filteredStudentList: observable,
      studentTableColumns: observable,
      groupList: observable,
      newGroupName: observable,
      newGroupModules: observable,
      newGroupRoll: observable,
      listOfModules: observable,
      listOfClusters: observable,
      setGroups: action,
      setNewGroupName: action,
      setNewGroupModules: action,
      setNewGroupRoll: action,
      setFilteredStudentList: action,
      setListOfClusters: action,
      updateClusterInformation: action
    })

    this.studentList = [];

    this.filteredStudentList = this.studentList;

    this.listOfClusters = [
      {id: '0', name: 'Cluster 1', description: 'description 1'},
      {id: '1', name: 'Cluster 2', description: 'description 2'},
      {id: '2', name: 'Cluster 3', description: 'description 3'},
      {id: '3', name: 'Cluster 4', description: 'description 4'},
      {id: '4', name: 'Cluster 5', description: 'description 5'}
    ]; 

    this.studentTableColumns = [
      { field: 'id', headerName: 'ID', type: 'number', width: 70 },
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'gender', headerName: 'Gender', width: 120 },
      { field: 'points', headerName: 'Points', type:'number', width: 100 },
      {
        field: 'badges_cnt',
        headerName: 'No.of Badges',
        type: 'number',
        width: 120,
      },
      { field: 'first_login_date_TW', headerName: 'First Login Date', width: 150 },
      { field: 'user_grade', headerName: 'Grade', width: 100},
      { field: 'user_city', headerName: 'City', width: 100 }
    ];

    this.groupList = [];

    this.listOfModules = [
      {name: 'area', id: '0'},
      {name: 'perimeter', id: '1'},
      {name: 'divison', id: '2'},
      {name: 'addition', id: '3'},
      {name: 'subtraction', id: '4'},
      {name: 'percentage', id: '5'},
      {name: 'ratio', id: '6'},
      {name: 'decimals', id: '7'},
      {name: 'fraction', id: '8'},
      {name: 'geometry', id: '9'}
    ];

    this.newGroupName = '';

    this.newGroupModules = [];

    this.newGroupRoll = null;
  }

  setGroups = (retrievedGroup: IndivGroup[]) => {
    this.groupList = retrievedGroup;
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

  setFilteredStudentList = (selectedGroup: any) => {
    console.log(selectedGroup);
    //put the students in this class as the rowsprops
    this.filteredStudentList = selectedGroup;
    console.log(this.filteredStudentList)
  };

  setListOfClusters = (clusters: ClusterInformationType[]) => { 
    this.listOfClusters = clusters; 
  }; 

  updateClusterInformation = (id: string, name: string, value: string) => { 
    const selectedCluster = this.listOfClusters.find(cluster => cluster.id == id); 
    selectedCluster[name] = value; 
    console.log(selectedCluster[name]);
  }
}

export default AppStore;
