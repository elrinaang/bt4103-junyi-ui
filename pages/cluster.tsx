import * as React from 'react';
import LandingPage from '../src/components/LandingPage';
import { useStores } from '../src/stores/StoreProvider';

const Home: React.FC = () => {  
    const { uiState } = useStores(); 
    const props = {
      currentPage: 'cluster',
      title: 'Cluster Details'
    }
  return <LandingPage {...props}/>
}

export default Home; 