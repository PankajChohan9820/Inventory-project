# Inventory-project


How to Run
# Backend
1. Navigate to the "backend" folder in your terminal or command prompt. Run npm install to install the required backend dependencies.

2. In the "backend" folder, locate the .env file. Inside the file, you'll find the configuration for the PostgreSQL database. Ensure to update the DB_USER and DB_PASSWORD with your PostgreSQL username and password, respectively.

3. Make sure you have Docker installed on your system as we are using it to run the PostgreSQL database.
    Building the custom PostgreSQL image:
    Run the following command in the same directory as your Dockerfile to build the custom image:
    "docker build -t my-postgres".

4. Starting the PostgreSQL container:
    To run the PostgreSQL container and set up the database, use the following command:
    docker run --name my-postgres -p 5432:5432 -d my-postgres
    
5. Run the backend server:
In the "backend" folder, execute node app.js to start the backend server.

# Frontend

1. Open another terminal or command prompt and navigate to the "frontend" folder of the project.
2. Run npm install to install the required frontend dependencies.
3. Launch the frontend application:
Execute npm start to start the frontend development server. This will open the application in your default web browser.

# Notes

1. The project is set up with a PostgreSQL database running in a Docker container. Make sure you have Docker installed and running on your system before starting the PostgreSQL container.
2. For the backend, the database configuration (username, password) should be provided in the .env file.
3. For the frontend, the application can be accessed by running the development server with npm start.
4. The application utilizes both the backend and frontend to function correctly. Ensure both the backend server and the frontend development server are running simultaneously to use the application.