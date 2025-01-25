import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

const App: React.FC = () => {
  const handleFormSubmit = (employee: Employee) => {
    // Implement form submission logic here
    console.log('Form submitted:', employee);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/new" element={<EmployeeForm onSubmit={handleFormSubmit} />} />
        <Route path="/employees/edit/:id" element={<EmployeeForm onSubmit={handleFormSubmit} />} />
      </Routes>
    </Router>
  );
};

export default App;