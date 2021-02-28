import * as React from 'react';
import LandingPage from '../src/components/LandingPage';

const CreateGroup: React.FC = () => {  
    const props = {
      currentPage: 'creategroup',
      title: 'Create Group'
    }
  return <LandingPage {...props}/>
}

export default CreateGroup; 