# Frontend Application

This is the frontend part of the full-stack employee management application built with React. It allows users to interact with employee records, including adding, editing, and importing data from CSV files.

## Project Structure

- **src/**: Contains the source code for the React application.
  - **App.tsx**: Main component that sets up routing and renders pages.
  - **components/**: Contains reusable components.
    - **EmployeeForm.tsx**: Form for adding and editing employee records.
    - **EmployeeList.tsx**: Displays a list of employees with options to edit and delete.
  - **pages/**: Contains page components.
    - **Home.tsx**: Landing page displaying the EmployeeList.
    - **ImportCSV.tsx**: Component for uploading CSV files to import employee records.
  - **services/**: Contains API service functions for backend communication.
    - **api.ts**: Functions for making API calls to the backend.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd full-stack-app/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- Use the **Employee Form** to add new employee records or edit existing ones.
- The **Employee List** displays all employees and provides options to edit or delete records.
- The **Import CSV** page allows you to upload a CSV file to bulk import employee data.

## Dependencies

- React
- Axios

## License

This project is licensed under the MIT License.