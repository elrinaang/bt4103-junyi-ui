import * as React from 'react';
import LandingPage from '../src/components/LandingPage';

const GroupList: React.FC = () => {  
    const props = {
      currentPage: 'groupList',
      title: 'Group List'
    }
  return <LandingPage {...props}/>
}

export default GroupList; 