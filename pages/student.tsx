import * as React from 'react';
import LandingPage from '../src/components/LandingPage';
import { useStores } from '../src/stores/StoreProvider';

const Student: React.FC = () => {  
    const { uiState } = useStores(); 
    const props = {
      currentPage: 'individualStudent',
      title: 'Student Details'
    }
  return <LandingPage {...props}/>
}

export default Student; 