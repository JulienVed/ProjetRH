import axios from 'axios';
import { Employee } from '../types';


const API_URL = 'http://localhost:5000/api/employees';

export const fetchEmployees = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addEmployee = async (employee: Employee): Promise<Employee> => {
    const response = await axios.post<Employee>(API_URL, employee);
    return response.data;
};

export const updateEmployee = async (id: string, employee: Employee) => {
    const response = await axios.put(`${API_URL}/${id}`, employee);
    return response.data;
};

export const deleteEmployee = async (id: string): Promise<void> => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

interface ImportCSVResponse {
    // Define the structure of the response data if known
}

export const importCSV = async (formData: FormData): Promise<ImportCSVResponse> => {
    const response = await axios.post<ImportCSVResponse>(`${API_URL}/import`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};