import React, { useState } from 'react';
import { Employee } from '../types';

interface EmployeeFormProps {
  employee?: Employee;
  onSubmit: (employee: Employee) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee, onSubmit }) => {
  const [formData, setFormData] = useState<Employee>({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
        placeholder="Birth Date"
      />
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        placeholder="End Date"
      />
      <input
        type="text"
        name="locationId"
        value={formData.locationId}
        onChange={handleChange}
        placeholder="Location ID"
      />
      <input
        type="text"
        name="jobId"
        value={formData.jobId}
        onChange={handleChange}
        placeholder="Job ID"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;