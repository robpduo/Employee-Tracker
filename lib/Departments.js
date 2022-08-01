const fetch = require("node-fetch");

const viewAllDepartments = () => 
    fetch('http://localhost:3001/api/departments', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json());

const addNewDepartment = (department) => 
    fetch('http://localhost:3001/api/department', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(department)
    })

module.exports = { viewAllDepartments, addNewDepartment };