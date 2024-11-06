# Vessel Autonomy System Dashboard

This README provides instructions on how to set up and run the Vessel Autonomy System Dashboard project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager) or **yarn**
- **Git** (to clone the repository)

## Getting Started

### 1. Clone the Repository

Clone the project repository from GitHub:

    git clone https://github.com/yourusername/vessel-autonomy-dashboard.git

Replace `yourusername` with your actual GitHub username.

### 2. Navigate to the Project Directory

    cd vessel-autonomy-dashboard

### 3. Install Dependencies

Install the required npm packages:

    npm install

Or if you're using yarn:

    yarn install

### 4. Start the Development Server

Start the React development server:

    npm start

Or with yarn:

    yarn start

This command will start the application and open it in your default web browser at `http://localhost:3000`.

### 5. Build for Production (Optional)

To create a production build of the application:

    npm run build

Or with yarn:

    yarn build

The optimized build will be output to the `build` directory.

## Project Structure

- **src/** - Contains the source code for the React application.
  - **components/** - Contains React components for each data state.
    - VehicleOdom.jsx
    - NavSat.jsx
    - INSstatus.jsx
    - SystemStatus.jsx
    - AtakStatus.jsx
  - App.js - Main application file.
- **public/** - Public assets and the HTML template.
- package.json - Contains project metadata and dependencies.

## Dependencies

The project uses the following major dependencies:

- **React** - JavaScript library for building user interfaces.
- **Tailwind CSS** - Utility-first CSS framework for styling.

## Available Scripts

In the project directory, you can run:

- **npm start** - Runs the app in development mode.
- **npm test** - Launches the test runner.
- **npm run build** - Builds the app for production.
