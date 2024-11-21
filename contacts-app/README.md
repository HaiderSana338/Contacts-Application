# Contacts-Application
A simple and responsive Contacts application built using React.js. This application fetches contact data from the JSONPlaceholder API and displays it in a list format. It allows users to view contact details and search through the contacts.

Features:
Displays a list of contacts fetched from the API.
Allows users to click on a contact to view detailed information.
Includes a search bar to filter contacts by name.
Responsive design that works on both desktop and mobile devices.
Prerequisites:
Node.js (version 14 or higher)
npm (Node Package Manager)
Setup Instructions:
Follow these steps to set up and run the Contacts application on your local machine:

1. Clone the Repository:
Clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/HaiderSana338/Contacts-Application.git
2. Install Dependencies:
Navigate to the project directory and install the necessary dependencies:


cd contacts-app
npm install

3. Start the Development Server:
After installing the dependencies, start the development server by running:


npm start
This will start the React development server and open the application in your browser at http://localhost:3000.

4. Use the Application:
The contacts will be fetched automatically from the JSONPlaceholder API.
Use the search bar to filter contacts by name.
Click on a contact name to view more details about the contact, including their email, phone number, website, and company information.
Project Structure:
App.js: Main component that fetches contacts and displays them.
ContactList.js: Displays the list of contacts with clickable names.
ContactDetail.js: Displays detailed information about the selected contact.
App.css: Contains the styles for the application.

Dependencies:
axios: A promise-based HTTP client used to fetch data from the API.
react: JavaScript library for building user interfaces.

License:
This project is licensed under the MIT License - see the LICENSE file for details.

Notes:
Ensure that Node.js and npm are installed on your machine before setting up the project.
The application is designed to be responsive and works well on both desktop and mobile screens.
