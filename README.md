# Motorsport Sheets

![License](https://img.shields.io/badge/license-none-lightgrey.svg)

## Description

Motorsport Sheets is a comprehensive application designed for race engineers, mechanics, and drivers to create and manage motorsport data for racing cars. The platform makes it efficient to manage critical information related to vehicle configurations, including suspension settings, wheel alignment, tyre pressures, and more.

This application was developed as the final project for my Certificate in Full Stack Development, at the University of Adelaide. It utilises the complete MERN stack, with the front-end built with React.js and Tailwind CSS, providing a responsive and polished user interface. The back-end utilizes MongoDB (a NoSQL database), and Mongoose for object data modeling. Node.js and Express.js are used to handle server-side logic and API routes which ultimately, make this application functional.

Additionally, this application uses GraphQL, a powerful query language that enables efficient fetching and managing of data between the front and back-end.

To use Motorport Sheets, navigate to this [link](https://motorsport-sheets-99499d8f02f1.herokuapp.com/).

Motorsport Sheets is also available on Render, via this [link](https://motorsport-sheets.onrender.com/).

View a video demo of Motorsport Sheets, via this [link](https://www.youtube.com/watch?v=TwBeylH2UUo).

## Table of Contents

- [Description](#description)
- [Installation](#installation-instructions)
- [Usage](#usage)
- [Contribution](#contribution-guidelines)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation Instructions

To install this application, clone this repository to your local machine and install all relevant packages by executing **'npm install'**. Please note, Node.js must be installed on your local machine for this application to run.

## Usage

Welcome to Motorsport Sheets, the future of motorsport data!

Upon visiting the [link](https://motorsport-sheets-99499d8f02f1.herokuapp.com/), you will taken to the Motorsport Sheets home page. Feel free to navigate the sections of the home page via the scroll links in the navigation bar:

![Home](/assets/readme/images/1.png)

If you already have Motorsport Sheets account, click the **Login** link and login. If you do not have an account, click the **Signup** link and enter your email and password:

![Signup](/assets/readme/images/2.png)

Upon logging in, you will be redirected to your Motorsport Sheets dashboard. Here is where you can view your cars, events and setup sheets:

![Dashboard](/assets/readme/images/3.png)

To get started, click the **Your Cars** link in the navigation bar, and add a car via the **Add Car** button. Fill out the form with your cars unique details:

![AddCar](/assets/readme/images/4.png)

Your cars will be listed in the **Your Cars** section of your dashboard:

![Cars](/assets/readme/images/5.png)

Next, click the **Your Events** link in the navigation bar. To add an event, click the **Add Event** button and fill out the form with your events unique details. By default, the **'Championship'** and **'Round'** form fields are disabled. To enable these fields, select the event type **'Race Event'** and choose your specific championship and round. Otherwise, select the event type **'Test Event'** and enter the track name and date for your test event.

![AddEvent](/assets/readme/images/6.png)

Your events will be listed in the **Your Events** section of your dashboard:

![Events](/assets/readme/images/7.png)

After you have successfully updated your cars and events into Motorsport Sheets, click the **Your Sheets** link in the navigation bar. Add a setup sheet via the **Add Sheet** button, and fill out the form with the unique details of your setup sheet. Your cars and events will be automatically listed as options in the dropdown menus for the **Car** and **Event** fields.

![AddSheet](/assets/readme/images/8.png)

Your setup sheets will be listed in the **Your Sheets** section of your dashboard. The title of the setup sheet is automatically generated based on your input, for easy identification:

![Sheets](/assets/readme/images/9.png)

The main section of your dashboard will automatically update with any new cars, events and setup sheets you add.

![UpdatedDashboard](/assets/readme/images/10.png)

**_Please note: This is an early development version of Motorsport Sheets - there is currently no functionality in place to edit or view complete data._**

## Contribution Guidelines

This project was developed by Matt Kelly.

## Tests

There are no tests associated with this project.

## License

![License](https://img.shields.io/badge/license-none-lightgrey.svg)

This project is not licensed. For more information regarding licenses, please visit this link: [Open Source Licenses](https://opensource.org/license/).

## Questions

Please feel free to contact me via my GitHub or email below for any questions associated with this application:  
GitHub: [mattkellyirl](https://github.com/mattkellyirl)  
Email: [mattkellyvisual@gmail.com](mailto:mattkellyvisual@gmail.com)
