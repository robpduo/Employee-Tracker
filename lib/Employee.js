const viewAllEmployees = () =>
    fetch('http://localhost:3001/api/employees', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())

const updateEmployeeRole = (eId, role) => 
    fetch(`http://localhost:3001/api/employee/${eId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(role)
    }).then(res => res.json());

const addNewEmployee = (employee) => 
    fetch('http://localhost:3001/api/employee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee)
    }).then(res => res.json());

module.exports = { viewAllEmployees, updateEmployeeRole, addNewEmployee };