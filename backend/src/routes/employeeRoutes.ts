import { Router } from 'express';
import EmployeeController from '../controllers/employeeController';

const router = Router();
const employeeController = new EmployeeController();

const setRoutes = () => {
    router.get('/employees', employeeController.getEmployees);
    router.post('/employees', employeeController.addEmployee);
    router.put('/employees/:id', employeeController.updateEmployee);
    router.delete('/employees/:id', employeeController.deleteEmployee);
    
    return router;
};

export default setRoutes;