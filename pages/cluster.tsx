import * as React from 'react';
import LandingPage from '../src/components/LandingPage';
import { useStores } from '../src/stores/StoreProvider';

const Cluster: React.FC = () => {  
    const { uiState } = useStores(); 
    const props = {
      currentPage: 'cluster',
      title: 'Cluster Details'
    }
  return <LandingPage {...props}/>
}

export default Cluster; 