export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string; // Use string for simplicity, or Date if you handle date objects
    position: string;
    department: string;
  }