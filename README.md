# Project Title

## Overview

This project is a web application built using React for the frontend and Django for the backend. The application utilizes Webpack for module bundling and includes features such as routing, API calls, and service workers for offline capabilities. The project is structured to facilitate easy development and deployment.

## Major Components

1. **Frontend (React)**: 
    - The frontend is built using React and utilizes React Router for client-side routing.
    - Key components include:
        - `App.js`: Main application component that sets up routing.
        - `Home.js`, `Login.js`, `Portfolio.js`, `NotFound.js`: Various pages of the application.
        - Styling is handled through a CSS file.

2. **Backend (Django)**:
    - The backend is built using Django and Django REST framework, providing API endpoints.
    - The settings are configured to work with Webpack through `django-webpack-loader`.
    - Static and media file handling is set up using Whitenoise.

3. **Webpack**:
    - Webpack is used for bundling JavaScript files and assets. The configuration is set up to handle different file types, including JavaScript, CSS, and images.
    - It also includes optimizations for production builds.

4. **Proxy Setup**:
    - The application uses `http-proxy-middleware` to redirect API requests to the Django backend during development.

## Installation Instructions

To set up this project locally, follow these steps:

### Prerequisites
- Node.js and npm (or Yarn)
- Python 3 and pip
- Django and other required Python packages

### Steps

1. **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2. **Install frontend dependencies**:
    ```bash
    cd frontend
    npm install
    # or
    yarn install
    ```

3. **Install backend dependencies**:
    ```bash
    cd backend
    pip install -r requirements.txt
    ```

4. **Configure environment variables**:
    - Create a `.env` file in the backend directory and add the necessary environment variables.
  
5. **Run the backend server**:
    ```bash
    cd backend
    python manage.py runserver
    ```

6. **Run the frontend development server**:
    ```bash
    cd frontend
    npm start
    # or
    yarn start
    ```

## Usage Instructions

- Open your browser and navigate to `http://localhost:3000` to access the React application.
- The application includes routes for the home page, login, and portfolio.
- Use the provided links to navigate between pages.
- The backend API is available at `http://localhost:8000/api` (ensure the Django server is running).

## Additional Information

- The project is set up to support both development and production builds.
- To create a production build of the frontend, run:
    ```bash
    npm run build
    # or
    yarn build
    ```
- The backend settings are configured to work with Heroku for deployment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.