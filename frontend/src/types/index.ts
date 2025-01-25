export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string; // Use string for simplicity, or Date if you handle date objects
  startDate: string; // Use string for simplicity, or Date if you handle date objects
  endDate: string; // Use string for simplicity, or Date if you handle date objects
  locationId: string;
  jobId: string;
}