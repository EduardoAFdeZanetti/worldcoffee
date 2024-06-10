README - Coffee Shop Web App - World Coffee
Eduardo A F de Zanetti

Description

This is a web application for a fictional coffee shop called "World Coffee". The app allows users to view available coffee products, add items to the shopping cart, and update their user information.

Technologies Used

Flask: Python web framework for creating the backend of the application.
Flask-SQLAlchemy: Flask extension for integration with SQLAlchemy database.
PostgreSQL: Relational database management system used to store application data.
HTML/CSS: For the structure and styling of web pages.
JavaScript: For interactivity in the user interface.
Key Features

Product Viewing: Users can browse the product page to see different types of coffee available, along with their prices and images.
Add to Cart: Users can add products to the shopping cart by clicking the "Add to Cart" button on the product page.
User Information Update: Users can update their user information, such as username, email, and password, through the profile page.
Cart Viewing: Users can view the items currently in the shopping cart on the cart page.
Installation and Execution

Setting up the Virtual Environment (optional):

Create a Python virtual environment using virtualenv or venv.
Activate the virtual environment.
Installing Dependencies:

Install the application dependencies using the requirements.txt file with the command pip install -r requirements.txt.
Database Configuration:

Set up a PostgreSQL database.
Change the SQLALCHEMY_DATABASE_URI variable in the app.py file to reflect the connection to the database.
Running the Application:

Run the app.py file to start the Flask server.
Access the application in a web browser, typically at http://localhost:5000.
Contribution

Contributions are welcome! Feel free to open issues or submit pull requests for improvements.

License

This project is licensed under the MIT License.

