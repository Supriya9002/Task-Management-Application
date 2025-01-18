
# Task Management Application

## Overview
This is a simple task management application where users can register, log in, and manage their tasks. The application is built with a **Node.js** backend, **MongoDB** for data storage, and a **React** frontend. Users can add, edit, delete, and view tasks in a responsive dashboard. The application also implements JWT-based authentication for secure access to the task-related endpoints.

## Features
- **User Authentication:**
  - Register new users.
  - Log in to access tasks.
  - Secure routes with JWT-based authentication.
- **Task Management:**
  - Add, edit, and delete tasks.
  - View tasks in a responsive dashboard.
  - **Task Management:**
  - Custom 404 error page for handling unknown URLs.
- **Responsive UI** built with **React** and **CSS**.
- **Task API** developed using **Node.js**, **Express.js**, and **MongoDB**.
- **Error Handling** and **Data Validation** implemented.

## Requirements

### Backend
1. **Node.js** - JavaScript runtime for building the server.
2. **Express.js** - Framework for building the REST API.
3. **MongoDB** - Database for storing user and task data.
4. **JWT** - For user authentication and authorization.

### Frontend
1. **React.js** - JavaScript library for building the user interface.
2. **CSS** - For styling the application.
3. **React Router** - For navigation between pages.

## Installation

### Backend Setup
1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app/backend
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Set up your environment variables in a `.env` file:
   ```
   DB_URL = <your_mongodb_connection_url>
   JWT_SECRET = <your_jwt_secret_key>
   Port = 2000
   ```
4. Start the backend server.
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory.
   ```bash
   cd task-management-app/frontend
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Start the frontend development server.
   ```bash
   npm start
   ```

### Testing the Application
1. Open the frontend in a browser (usually at `http://localhost:3000`).
2. Register a new user and log in.
3. Add, edit, and delete tasks as required.

## API Endpoints

### User Authentication
- **POST /register** - Register a new user.
- **POST /login** - Log in and get a JWT token.

### Task Management (Protected Routes)
- **POST /tasks** - Add a new task.
- **GET /tasks** - Get all tasks of the logged-in user.
- **PUT /tasks/:id** - Update a task by ID.
- **DELETE /tasks/:id** - Delete a task by ID.
- **GET /specificTask/:id** - Get a specific task by ID.

### JWT Authentication Middleware
- Protects all routes that require authentication.

## Deployment (Optional)

You can deploy the application on any cloud platform such as **AWS**, **GCP**, **Azure**, or **Render**.

- Follow the respective platform documentation for deployment steps.
- After deployment, make sure to update the `DB_URL` and `JWT_SECRET` environment variables with the production values.

## GitHub Repository

- [Task Management Application GitHub Repository](https://github.com/Supriya9002/Task-Management-Application)


