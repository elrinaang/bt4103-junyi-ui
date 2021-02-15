import * as React from 'react';
import LandingPage from '../src/components/LandingPage';

const StudentList: React.FC = () => {  
    const props = {
        currentPage: 'studentlist',
        title: 'Student List'
    }
  return <LandingPage {...props}/>
}

export default StudentList; 