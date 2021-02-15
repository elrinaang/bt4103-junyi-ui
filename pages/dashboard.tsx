import * as React from 'react';
import LandingPage from '../src/components/LandingPage';

const Dashboard: React.FC = () => {  
    const props = {
        currentPage: 'dashboard'
    }
  return <LandingPage {...props}/>
}

export default Dashboard; 