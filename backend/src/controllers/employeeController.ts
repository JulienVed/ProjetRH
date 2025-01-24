import { Request, Response } from 'express';
import EmployeeModel from '../models/employeeModel';

class EmployeeController {
    private employeeModel: EmployeeModel;

    constructor() {
        this.employeeModel = new EmployeeModel();
    }

    public async getEmployees(req: Request, res: Response): Promise<void> {
        try {
            const employees = await this.employeeModel.getAllEmployees();
            res.status(200).json(employees);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving employees', error });
        }
    }

    public async addEmployee(req: Request, res: Response): Promise<void> {
        try {
            const { id, firstName, lastName, email, birthDate, startDate, endDate, locationId, jobId } = req.body;
            const existingEmployee = await this.employeeModel.findEmployeeById(id);
            if (existingEmployee) {
                res.status(400).json({ message: 'Employee with this ID already exists' });
                return;
            }
            const newEmployee = await this.employeeModel.createEmployee({ id, firstName, lastName, email, birthDate, startDate, endDate, locationId, jobId });
            res.status(201).json(newEmployee);
        } catch (error) {
            res.status(500).json({ message: 'Error adding employee', error });
        }
    }

    public async updateEmployee(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const updatedEmployee = await this.employeeModel.updateEmployee(id, updatedData);
            if (!updatedEmployee) {
                res.status(404).json({ message: 'Employee not found' });
                return;
            }
            res.status(200).json(updatedEmployee);
        } catch (error) {
            res.status(500).json({ message: 'Error updating employee', error });
        }
    }

    public async deleteEmployee(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const deleted = await this.employeeModel.deleteEmployee(id);
            if (!deleted) {
                res.status(404).json({ message: 'Employee not found' });
                return;
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting employee', error });
        }
    }
}

export default EmployeeController;