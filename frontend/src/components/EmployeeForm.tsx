import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ employee, onSubmit, isEditing }) => {
    const [formData, setFormData] = useState({
        id: employee ? employee.id : '',
        firstName: employee ? employee.firstName : '',
        lastName: employee ? employee.lastName : '',
        email: employee ? employee.email : '',
        birthDate: employee ? employee.birthDate : '',
        startDate: employee ? employee.startDate : '',
        endDate: employee ? employee.endDate : '',
        locationId: employee ? employee.locationId : '',
        jobId: employee ? employee.jobId : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await axios.put(`/api/employees/${formData.id}`, formData);
            } else {
                await axios.post('/api/employees', formData);
            }
            onSubmit();
        } catch (error) {
            console.error('Error saving employee:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="Employee ID" required />
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} placeholder="Birth Date" required />
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Start Date" required />
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" />
            <input type="text" name="locationId" value={formData.locationId} onChange={handleChange} placeholder="Location ID" required />
            <input type="text" name="jobId" value={formData.jobId} onChange={handleChange} placeholder="Job ID" required />
            <button type="submit">{isEditing ? 'Update Employee' : 'Add Employee'}</button>
        </form>
    );
};

export default EmployeeForm;