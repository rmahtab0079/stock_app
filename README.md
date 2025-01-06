# Project Title

## Overview

This project is a web application that combines a React frontend with a Django backend. The frontend is built using React and utilizes React Router for navigation, while the backend is powered by Django and serves API endpoints. The application also integrates Webpack for module bundling and asset management.

## Major Parts of the Code

### Frontend (React)

- **App Component**: The main component that uses React Router to manage different routes: Home, Login, Portfolio, and NotFound.
- **Home**, **Login**, and **Portfolio Components**: Individual components that represent different views in the application.
- **NotFound Component**: Displays a message when the user navigates to a non-existent route.
- **Service Worker**: A service worker is set up for offline capabilities and faster loading times.
- **CSS Styles**: Basic styling for the application is defined in `index.css`.

### Backend (Django)

- **Django Settings**: The settings file that configures the Django application, including database settings, allowed hosts, and installed apps.
- **URL Configuration**: Routes defined for the Django application, mapping URLs to the appropriate views.
- **Webpack Loader**: Configures how the Django app interacts with Webpack for serving static assets.

### Proxy Configuration

- A `setupProxy.js` file is included to redirect API calls from the React frontend to the Django backend running on a different port.

## Installation Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

2. **Set Up the Backend**:
   - Navigate to the backend directory and create a virtual environment:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   ```

   - Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

3. **Set Up the Frontend**:
   - Navigate back to the root directory and install the frontend dependencies:
   ```bash
   cd ..
   cd frontend
   npm install
   ```

4. **Configure Environment Variables**:
   - Create a `.env` file in the backend directory and configure necessary environment variables (if any).

5. **Run the Backend**:
   - Navigate to the backend directory and run the server:
   ```bash
   cd backend
   python manage.py migrate  # Run migrations
   python manage.py runserver
   ```

6. **Run the Frontend**:
   - Open another terminal, navigate to the frontend directory and start the React application:
   ```bash
   cd frontend
   npm start
   ```

## Usage Instructions

- Open your browser and navigate to `http://localhost:3000` to access the React frontend.
- Use the navigation links to switch between Home, Login, and Portfolio views. If you enter a route that does not exist, you will see the Not Found page.

## Contributing

Contributions to the project are welcome. Please fork the repository and submit a pull request for any features, improvements, or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.