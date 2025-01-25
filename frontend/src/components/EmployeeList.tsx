import React from 'react';
import { Employee } from '../types';

const employees: Employee[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', dateOfBirth: '1990-01-01', position: 'Software Engineer', department: 'Engineering' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', dateOfBirth: '1985-05-15', position: 'Product Manager', department: 'Product' },
  // Add more employees as needed
];

const EmployeeList: React.FC = () => {
  const handleDelete = (id: number) => {
    // Implement delete functionality here
    console.log(`Delete employee with id: ${id}`);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Position</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                {/* Add edit functionality here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;