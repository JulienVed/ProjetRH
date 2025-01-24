import React, { useEffect, useState } from 'react';
import { fetchEmployees, deleteEmployee } from '../services/api';

const EmployeeList: React.FC = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const loadEmployees = async () => {
            const data = await fetchEmployees();
            setEmployees(data);
        };
        loadEmployees();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteEmployee(id);
        setEmployees(employees.filter(employee => employee.id !== id));
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