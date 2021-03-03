import * as React from 'react';
import redirect from '../src/lib/redirect';

const Index: React.FC = () => {   
  React.useEffect(() => redirect('/home'),[]);
  return null;
}

export default Index;