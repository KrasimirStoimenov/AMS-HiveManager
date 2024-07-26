# AMS-HiveManager

Softuni ReactJS course final project which uses best practices and architecture for single page application (SPA).

ApiaryManagementSystem (AMS) is a comprehensive tool designed to help beekeepers manage and monitor their apiaries effectively. This application allows you to track hive locations, log inspections, record honey production, and manage tasks and reminders.

## Features

- **Hive Management**: Track the location and status of each hive.
- **Inspection Logs**: Record details of hive inspections and health status.
- **Production Records**: Log honey production and harvest dates.
- **Task Management**: Schedule and manage beekeeping tasks and reminders.
- **User Authentication**: Secure login and user management.

## Technologies Used
- **Frontend**: Vite React
- **Backend**: [Softuni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server)
- **Authentication**: Token-Based Authentication
- **Styling**: CSS, Bootstrap, React-Bootstrap
  
## Installation

To install and run AMS on your local machine, follow these steps:

### Prerequisites

- Node.js
- npm

### Steps
 #### 1. Clone the repository
  - **Clone the repository**
     ```bash
     git clone https://github.com/KrasimirStoimenov/AMS-HiveManager.git
     cd AMS-HiveManager
 #### 2. Run the server
  - **Navigate to the server directory**
     ```bash
     cd server
   
  - **Run the backend server**
     ```bash
     node server.js
      ```
      - **The backend server should now be running on http://localhost:3030/.**
      - **The service is initialized with three users, which can be used for immediate testing:**
        - peter@abv.bg : 123456
        - george@abv.bg : 123456
        - admin@abv.bg : admin

      - **More information on how to use the server can be found on this [link](https://github.com/KrasimirStoimenov/AMS-HiveManager/tree/main/server#readme) and on original [Softuni Practice Server page](https://github.com/softuni-practice-server/softuni-practice-server)**

 #### 3. Run the application
  - **Navigate to the client directory (in new terminal)**
     ```bash
     cd client

  - **Install dependencies**
     ```bash
     npm install

  - **Run the application**
     ```bash
     npm run dev
     ```
      - **The app should now be running on http://localhost:5173.**

