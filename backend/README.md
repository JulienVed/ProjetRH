# Backend Application

This is the backend part of the full-stack application that manages employee records. It is built using Node.js, Express, and PostgreSQL.

## Project Structure

- **src/app.ts**: Entry point of the application. Initializes the Express app and connects to the database.
- **src/controllers/employeeController.ts**: Contains the `EmployeeController` class for handling CRUD operations for employee records.
- **src/routes/employeeRoutes.ts**: Defines the routes for employee-related operations and links them to the controller methods.
- **src/models/employeeModel.ts**: Defines the structure of employee data and includes methods for database interactions.
- **src/config/database.ts**: Establishes a connection to the PostgreSQL database.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd full-stack-app/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure the database**:
   Update the database configuration in `src/config/database.ts` with your PostgreSQL credentials.

4. **Run the application**:
   ```
   npm start
   ```

## API Usage

- **GET /employees**: Retrieve a list of all employees.
- **POST /employees**: Add a new employee.
- **PUT /employees/:id**: Update an existing employee by ID.
- **DELETE /employees/:id**: Delete an employee by ID.
- **POST /employees/import**: Import employee records from a CSV file.

## Notes

- Ensure that PostgreSQL is running and accessible.
- The application includes validation for duplicate employee IDs during insertion.
- The frontend application is located in the `../frontend` directory and interacts with this backend API.