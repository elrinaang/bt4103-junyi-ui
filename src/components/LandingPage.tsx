import * as React from 'react'; 
import Layout from './Layout';
import HomePage from './HomePage'; 
import StudentList from './studentList'; 
import CreateGroup from './CreateGroup';
import GroupList from './GroupList';
import IndividualStudent from './IndividualStudent';
import IndividualCluster from './IndividualCluster'; 

interface LandingPageProps{ 
  currentPage: string;
  title: string; 
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  const { currentPage, title } = props; 

  return(
    <Layout title={title}>
      {
        currentPage === 'homepage' &&
        <HomePage/> 

      }
      {
        currentPage === 'studentlist' &&
        <StudentList/> 

      }
      {
        currentPage === 'creategroup' &&
        <CreateGroup/> 

      }
      {
        currentPage === 'cluster' && 
        <IndividualCluster/>
      }
      {
        currentPage === 'groupList' && 
        <GroupList/>
      }
      {
        currentPage === 'individualStudent' && 
        <IndividualStudent/>
      }
    </Layout>
  )
};

export default LandingPage; 