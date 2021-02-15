import * as React from 'react'; 
import Layout from './Layout';
import HomePage from './HomePage'; 
import Dashboard from './Dashboard';
import StudentList from './StudentList'; 

interface LandingPageProps{ 
    currentPage: string;
    title: string; 
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
    const { currentPage, title } = props; 

    return(
        <Layout title={title}>
            {
                currentPage === 'homepage' &&
                <HomePage/> 

            }
            {
                currentPage === 'dashboard' &&
                <Dashboard/> 

            }
            {
                currentPage === 'studentlist' &&
                <StudentList/> 

            }
        </Layout>
    )
};

export default LandingPage; 