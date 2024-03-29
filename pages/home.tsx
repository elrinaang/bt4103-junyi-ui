import * as React from 'react';
import LandingPage from '../src/components/LandingPage';

const Home: React.FC = () => {  
    const props = {
      currentPage: 'homepage',
      title: 'Homepage'
    }
  return <LandingPage {...props}/>
}

export default Home; 