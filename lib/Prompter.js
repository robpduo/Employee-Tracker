const inquirer = require('inquirer');
const { viewAllEmployees, updateEmployeeRole } = require('./Employee');
const { viewAllDepartments } = require('./Departments');
const { viewAllRoles } = require('./Role');

class Prompter {
    constructor() {
        this.employeeRecords = [];  // used to store a record of employees
        this.employeeNames = [];    // used to store a record of employee names - used to render names for the selection menu
        this.employeeName;
        this.employeeId;

        this.departmentsRecords = []; // used to store a record of departments
        this.departmentNames = [];    // used to store a list of department ids - used to render names for the selection menu
        this.departmentId;  // use to update department Ids in employee's db or department's db

        this.roleRecords = []; // used to store a record of roles
        this.roleTitles = []; // used to store a list of role names - used to render names for the selection menu
        this.roleId;    // used to update
        this.roleTitles;
        
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
            this.employeeName = response.employeeSelection;
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

    // Users choose from a list of roles to retrieve a role ID
    async inquireRole() {
        this.roleRecords = await viewAllRoles();
        console.table(this.roleRecords.data);

        // empty array
        if (this.roleTitles) {
            this.roleTitles = [];
        }

        this.roleRecords.data.map(role => {
            this.roleTitles.push(role.title);
        });

        return inquirer.prompt({
            type: 'list',
            name: 'roleSelection',
            message: 'Select a Role',
            choices: this.roleTitles
        }).then(response => {
            this.roleRecords.data.map(role => {
                if (role.title.includes(response.roleSelection)) {
                    this.roleId = role.id;
                    this.roleTitle = response.roleSelection;
                }
            })
        })

    }

    promptMenu() {
        return inquirer.prompt({
            type: 'list',
            name: 'menuSelection',
            message: 'Please select a menu option:',
            choices: ['View All Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }).then(async response => {
            if (response.menuSelection === 'View All Employees') {
                this.employeeNames = await viewAllEmployees();
                console.table(this.employeeNames.data);

            } else if (response.menuSelection === 'Update Employee Role') {
                await this.inquireEmployeeName(); // updates the employeeId to determine which employee needs to be updated
                await this.inquireRole();

                const roleObj  = { role: this.roleId }

                await updateEmployeeRole(this.employeeId, roleObj);
                console.log(`Employee: ${this.employeeName} Updated To Role: ${this.roleTitle}`);
                
            }
        });
    }
}

module.exports = Prompter;