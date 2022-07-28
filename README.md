# Employee-Tracker

## Link to the Video Demonstration
https://drive.google.com/file/d/1V_EUPI99SN2dEtpo7dv-y6WcI-LlvpTs/view

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

npm i node-fetch@2.6.1

## Usage
<img width="378" alt="Screen Shot 2022-07-27 at 1 38 19 PM" src="https://user-images.githubusercontent.com/101683611/181313123-e369b2d7-0b67-40a1-ace9-0a11df28f7d7.png">
Main Menu Choices:
  - Add Employee, Role, or Department
  - View All Employees, Roles, or Departments
  - Update Employee Role
  - View Total Utilized Budget
  - Quit

<img width="452" alt="Screen Shot 2022-07-27 at 1 40 16 PM" src="https://user-images.githubusercontent.com/101683611/181313428-14e7e19f-e6c7-49d0-ad8a-16075ae9ed65.png"> </br>
Viewing All Employees </br>

<img width="409" alt="Screen Shot 2022-07-27 at 1 42 05 PM" src="https://user-images.githubusercontent.com/101683611/181313779-c680c936-ffc0-4e6e-939f-9fe69d006713.png"> </br>
View All Roles </br>

<img width="363" alt="Screen Shot 2022-07-27 at 1 42 53 PM" src="https://user-images.githubusercontent.com/101683611/181314312-3634f5a6-2d22-4e7f-ba7f-11d3d4904946.png"> </br>
Viewing All Departments </br>


<img width="376" alt="Screen Shot 2022-07-27 at 1 41 02 PM" src="https://user-images.githubusercontent.com/101683611/181313578-781d0d90-d89b-4f22-adf1-99fa1ed923f5.png"> </br>
Viewing Total Utilized Budget


