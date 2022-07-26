const inquirer = require('inquirer');
const { viewAllEmployees } = require('./Employee');

class Prompter {
    constructor() {

    }

    promptMenu() {
        return inquirer.prompt({
            type: 'list',
            name: 'menuSelection',
            message: 'Please select a menu option:',
            choices: ['View All Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }).then(response => {
            console.log(`You selected: ${response.menuSelection}`);
            if (response.menuSelection === 'View All Employees') {
                viewAllEmployees();
            }
        });
    }
}

module.exports = Prompter;