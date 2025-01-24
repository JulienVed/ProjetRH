import React from 'react';
import EmployeeList from '../components/EmployeeList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Employee Management</h1>
            <EmployeeList />
        </div>
    );
};

export default Home;