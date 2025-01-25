import React from 'react';
import { Employee } from '../types';

const employees: Employee[] = [
  { id: '1', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', birthDate: '1990-01-01', startDate: '2020-01-01', endDate: '2021-01-01', locationId: '1', jobId: '1' },
  { id: '2', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', birthDate: '1985-05-15', startDate: '2019-05-15', endDate: '2020-05-15', locationId: '2', jobId: '2' },
  // Add more employees as needed
];

const EmployeeList: React.FC = () => {
  const handleDelete = (id: string) => {
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
            <th>Birth Date</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Location ID</th>
            <th>Job ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee: Employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.birthDate}</td>
              <td>{employee.startDate}</td>
              <td>{employee.endDate}</td>
              <td>{employee.locationId}</td>
              <td>{employee.jobId}</td>
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