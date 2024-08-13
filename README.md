README - Coffee Shop Web App - World Coffee
Eduardo A F de Zanetti

Description

This is a web application for a fictional coffee shop called "World Coffee". The app allows users to view available coffee products, add items to the shopping cart, and update their user information.

## Technologies Used

**Frontend:**
- HTML
- CSS
- JavaScript

**Database:**
- PostgreSQL

**Backend:**
- Python (Flask framework)
- Flask-WTF (for web forms)
- Flask-SQLAlchemy (for SQL database integration in Flask)
- Werkzeug (for password security and hashing)
- Flask Blueprints (for modularizing and organizing the code)

## Getting Started

To run the World Coffee E-Commerce website locally, follow these steps:

1. **Clone the Repository:**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/EduardoAFdeZanetti/worldcoffee.git

2. Install the Necessary Dependencies:
Navigate to the project directory and install the required dependencies by running:

pip install -r requirements.txt

3. Navigate to the Project Directory:
Change to the project directory using:

cd worldcoffee

4. Create and Activate a Virtual Environment:

python -m venv venv

5. Activate the virtual environment:
 - On Windows:
    venv\Scripts\activate

 - On macOS and Linux:
    source venv/bin/activate

5. Run the Flask Application:
Start the Flask application with:

python app.py

6. Access the Website in Your Browser:
Open your browser and navigate to http://localhost:8080 to view the website.

## Using Gunicorn (Production)

For deploying the application in a production environment using Gunicorn on localhost port 8080:

gunicorn -b 0.0.0.0:8080 app:app

Access the application at http://localhost:8080.

Notes

- Ensure you are using a virtual environment (virtualenv) to avoid dependency conflicts. Follow the steps above to set up and activate your virtual environment.
- The application should be tested locally before deploying to a production environment.

## Live Demo

You can see a live demo of the website at the following link:

Render: World Coffee E-Commerce on Render 

## Images Source

The images used in this project are sourced from various royalty-free image providers, including Vecteezy.