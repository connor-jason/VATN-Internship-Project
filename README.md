# 🚢 VATN: Autonomous Vessel System Dashboard 📊

This README provides instructions on how to set up and run the Vessel Autonomy System Dashboard project, along with an overview of its key features and design decisions that enhance usability, readability, and performance.

![VATN](https://github.com/user-attachments/assets/0293f3cb-a265-4130-ba55-3f988fa67610)

## Features

- **Real-Time Status Indicators**: Utilizes green checks and red X's to provide immediate visual feedback on system statuses, enabling users to quickly identify any issues.
- **Dark Theme Interface**: Implements a dark-themed design that enhances text readability and reduces eye strain, especially in low-light environments.
- **Intuitive Data Visualization**:
  - **Vehicle Odom**: Incorporates visual bars and directional arrows to represent heading, pitch, roll, and depth, allowing users to grasp complex data at a glance.
  - **Formatted Coordinates**: Displays latitude and longitude in degrees and minutes format for improved intuitiveness and alignment with navigational standards.
- **Lightweight Implementation**: Avoids the use of heavy packages, libraries, and external APIs to maintain a fast and responsive dashboard, adhering to performance optimization best practices.
- **State Persistence**: Employs `localStorage` to preserve component states across page reloads, ensuring a consistent user experience.

## Design Decisions

- **Visual Status Indicators**:
  - **Green Checks and Red X's**: Chosen to provide clear and immediate visual cues about the operational status of various systems. This color-coding enhances user ability to monitor system health efficiently.
  
- **Dark Theme**:
  - **Enhanced Readability**: Selected a dark color scheme to improve text visibility and reduce glare, making it easier for users to read information for extended periods.
  
- **Data Visualization Enhancements**:
  - **Directional Arrows and Progress Bars**: Integrated into the Vehicle Odom component to represent heading, pitch, roll, and depth visually. These elements allow users to understand complex data quickly without interpreting raw numbers.
  
- **Formatted Latitude and Longitude**:
  - **Degrees and Minutes Format**: Adopted a more intuitive format for displaying geographic coordinates, aligning with common navigational practices and improving overall user comprehension.
  
- **Minimalist Dependencies**:
  - **Performance Optimization**: Deliberately avoided using bulky packages and external APIs to keep the application lightweight. This decision reduces load times and minimizes potential points of failure, ensuring a smoother user experience.
  
- **State Management with `localStorage`**:
  - **Persistence Across Reloads**: Implemented `localStorage` to store fetched data, allowing the dashboard to retain its state even after the page is refreshed. This enhances usability by providing continuity in data presentation.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager) or **yarn**
- **Git** (to clone the repository)

## Getting Started

### 1. Clone the Repository

Clone the project repository from GitHub:

```bash
git clone https://github.com/your-username/VATN-Internship-Project.git
```

Replace `yourusername` with your actual GitHub username.

### 2. Navigate to the Project Directory

```bash
cd vessel-autonomy-dashboard
```

### 3. Install Dependencies

Install the required npm packages:

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

### 4. Start the Development Server

Start the React development server:

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

This command will start the application and open it in your default web browser at `http://localhost:3000`.

### 5. Build for Production (Optional)

To create a production build of the application:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

The optimized build will be output to the `build` directory.

## Dependencies

The project uses the following major dependencies:

- **React** - JavaScript library for building user interfaces.
- **Tailwind CSS** - Utility-first CSS framework for styling.

## Available Scripts

In the project directory, you can run:

- **npm start** - Runs the app in development mode.
- **npm test** - Launches the test runner.
- **npm run build** - Builds the app for production.

---

By incorporating these features and design decisions, the Vessel Autonomy System Dashboard offers a user-friendly and efficient interface for monitoring vessel autonomy metrics. The emphasis on visual clarity, performance, and intuitive data presentation ensures that users can effectively oversee system statuses and respond to any issues promptly.
