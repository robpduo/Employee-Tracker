const inquirer = require('inquirer');
const { viewAllEmployees, updateEmployeeRole } = require('./Employee');
const { viewAllDepartments } = require('./Departments');

class Prompter {
    constructor() {
        this.employeeRecords = [];  // used to store a record of employees
        this.employeeNames = [];    // used to store a record of employee names - used to render names for the selection menu
        this.employeeName;
        this.employeeId;

        this.departmentsRecords = []; // used to store a record of departments
        this.departmentNames = [];    // used to store a list of department ids
        this.departmentId;  // use to update department Ids in employee's db or department's db
        
    }

    // ask the user to choose from a selection of employees and returns the employees ID
    async inquireEmployeeName() {

        this.employeeRecords = await viewAllEmployees();

        // empty array if it exists
        if (this.employeeNames) {
            this.employeeNames = [];
        };

        //render a list of choices
        this.employeeRecords.data.map(employee => {
            this.employeeNames.push(employee.first_name + " " + employee.last_name);
        });

        return inquirer.prompt({
            type: 'list',
            name: 'employeeSelection',
            message: 'Select an employee to update:',
            choices: this.employeeNames
        }).then(response => {
            console.log(`You selected: ${response.employeeSelection}`);
            //retrieve employee id
            this.employeeRecords.data.map(employee => {
                console.log(employee.first_name + " " + employee.last_name);
                if (response.employeeSelection.includes(employee.first_name) && response.employeeSelection.includes(employee.last_name)) {
                    this.employeeId = employee.id;
                }
            })
        })
    }

    // renders all available departments and asks the user to choose 1
    async inquireDepartment() {
        this.departmentsRecords = await viewAllDepartments();
        console.table(this.departmentsRecords.data);

        // empty array if it exists
        if (this.departmentNames) {
            this.departmentNames = [];
        }
        // used to render all departments for selection
        this.departmentsRecords.data.map(department => {
            this.departmentNames.push(department.name);
        });

        return inquirer.prompt({
            type: 'list',
            name: 'departmentSelection',
            message: 'Select a department:',
            choices: this.departmentNames
        }).then(response => {
            this.departmentsRecords.data.map(department => {
                if (department.name.includes(response.departmentSelection)) {
                    this.departmentId = department.id;
                };
            });
        })
    }

    promptMenu() {
        return inquirer.prompt({
            type: 'list',
            name: 'menuSelection',
            message: 'Please select a menu option:',
            choices: ['View All Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }).then(async response => {
            console.log(`You selected: ${response.menuSelection}`);
            if (response.menuSelection === 'View All Employees') {
                this.employeeNames = await viewAllEmployees();
                console.table(this.employeeNames.data);

            } else if (response.menuSelection === 'Update Employee Role') {
                await this.inquireEmployeeName(); // updates the employeeId to determine which employee needs to be updated
                await this.inquireDepartment(); // updates departmentId to the new role
                const roleObj  = {
                    role: this.departmentId
                }
                await updateEmployeeRole(this.employeeId, roleObj);
                
            }
        });
    }
}

module.exports = Prompter;