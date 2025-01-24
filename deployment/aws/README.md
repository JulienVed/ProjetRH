# AWS Deployment Instructions for Full-Stack Application

This document provides instructions for deploying the full-stack application on AWS using Docker and Docker Compose.

## Prerequisites

- AWS Account
- Docker installed on your local machine
- AWS CLI installed and configured
- Docker Compose installed

## Steps to Deploy

1. **Clone the Repository**
   Clone the repository from GitHub to your local machine.

   ```bash
   git clone <your-repo-url>
   cd full-stack-app
   ```

2. **Build Docker Images**
   Navigate to the `deployment/aws` directory and build the Docker images for the backend and frontend.

   ```bash
   cd deployment/aws
   docker-compose build
   ```

3. **Configure AWS RDS (Optional)**
   If you are using AWS RDS for PostgreSQL, create a new RDS instance and note the endpoint, username, and password. Update the database connection settings in `backend/src/config/database.ts` accordingly.

4. **Run Docker Compose**
   Start the application using Docker Compose. This will start the backend, frontend, and PostgreSQL services.

   ```bash
   docker-compose up
   ```

5. **Access the Application**
   Once the services are running, you can access the application in your web browser. The frontend will typically be available at `http://localhost:3000`.

6. **Deploy to AWS ECS (Optional)**
   If you want to deploy the application to AWS Elastic Container Service (ECS), follow these steps:
   - Create a new ECS cluster.
   - Push your Docker images to Amazon ECR (Elastic Container Registry).
   - Create a new task definition in ECS using the pushed images.
   - Launch the task in your ECS cluster.

## Environment Variables

Make sure to set the necessary environment variables for your application in the `docker-compose.yml` file or in your AWS ECS task definition.

## Troubleshooting

- If you encounter issues, check the logs of the Docker containers using:

  ```bash
  docker-compose logs
  ```

- Ensure that your AWS security groups allow traffic on the necessary ports.

## Conclusion

You have successfully deployed the full-stack application on AWS. For further customization and scaling, refer to the AWS documentation on ECS and RDS.