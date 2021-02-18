import * as React from 'react';
import LandingPage from '../src/components/LandingPage';

const CreateClass: React.FC = () => {  
    const props = {
      currentPage: 'createclass',
      title: 'Create Class'
    }
  return <LandingPage {...props}/>
}

export default CreateClass; 