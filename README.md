# Employee-Tracker

## Link to the Video Demonstration

## Description
This app is used to keep track of employee infomation within a company with multiple departments. It provides a command line interface to retrieve and store data within a relational database

## Features
- Users may add a department, role, and employee record to the database
- Users may view all records within the Employee, Role, and Department tables

### Future Improvements
- At the moment, users role do not correspond to the correct manager within the same department. The relationship tables could be improved such that users can only select managers within the same department
- Decimal values not showing up within the terminal

## Technologies Used
- JavaScript
- Node.js
- Express.js
- MySQL lite - relational database used to create the table schemas and store information
- Insomnia - used to perform endpoint requests during development
- Inquirer - built in module used to implement the command line interface

## Entity Relationship Diagram
<img width="717" alt="Screen Shot 2022-07-27 at 12 16 52 AM" src="https://user-images.githubusercontent.com/101683611/181161001-5924bff0-f73f-49d0-acdb-845c0070f0f4.png">

## To Run
1. Git clone https://github.com/robpduo/Employee-Tracker.git
2. Within the root directory enter `npm install` into the terminal to download and install all the dependencies
3. Install MySql lite and run the sql database using `mysql -u root -p`
4. In the sql terminal enter `source db/db.sql`, `source db/schema.sql`, `source db/seeds.sql` to setup the database with initial entries (optional seeds.sql)
5. Start up the server using `npm start`
6. In a separate terminal `node app.js`

