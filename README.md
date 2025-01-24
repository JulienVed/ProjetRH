# Full Stack Employee Management Application

This project is a full-stack web application designed to manage employee records. It allows users to add, update, delete, and view employee information, as well as import data from CSV files. The application is built using a React frontend and a Node.js/Express backend, with a PostgreSQL database.

## Project Structure

- **backend/**: Contains the backend application.
  - **src/**: Source code for the backend.
    - **app.ts**: Entry point of the backend application.
    - **controllers/**: Contains the logic for handling employee-related operations.
      - **employeeController.ts**: Handles CRUD operations for employee records.
    - **routes/**: Defines the API routes for the application.
      - **employeeRoutes.ts**: Sets up routes for employee operations.
    - **models/**: Defines the data structure and database interactions.
      - **employeeModel.ts**: Structure of employee data and database methods.
    - **config/**: Configuration files.
      - **database.ts**: Database connection setup.
  - **package.json**: Lists dependencies for the backend application.
  - **tsconfig.json**: TypeScript configuration for the backend.
  - **README.md**: Documentation for the backend application.

- **frontend/**: Contains the frontend application.
  - **src/**: Source code for the frontend.
    - **App.tsx**: Main component that sets up routing.
    - **components/**: Reusable components for the application.
      - **EmployeeForm.tsx**: Form for adding and editing employee records.
      - **EmployeeList.tsx**: Displays a list of employees.
    - **pages/**: Contains different pages of the application.
      - **Home.tsx**: Landing page displaying the employee list.
      - **ImportCSV.tsx**: Page for importing employee records from CSV files.
    - **services/**: API service functions for backend communication.
      - **api.ts**: Functions for making API calls.
  - **package.json**: Lists dependencies for the frontend application.
  - **tsconfig.json**: TypeScript configuration for the frontend.
  - **README.md**: Documentation for the frontend application.

- **deployment/**: Contains files for deploying the application.
  - **aws/**: AWS deployment files.
    - **Dockerfile**: Instructions for building the Docker image.
    - **docker-compose.yml**: Defines services for the application.
    - **README.md**: Instructions for deploying on AWS.

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up the PostgreSQL database and update the database configuration in `src/config/database.ts`.
4. Start the backend server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## Usage

- Access the frontend application in your browser at `http://localhost:3000`.
- Use the forms to add, edit, or delete employee records.
- Import employee data from CSV files using the provided functionality.

## Deployment

Follow the instructions in the `deployment/aws/README.md` file to deploy the application on AWS.

## License

This project is licensed under the MIT License.