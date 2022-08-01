const fetch = require("node-fetch");

const viewAllRoles = () =>
    fetch('http://localhost:3001/api/roles', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())

const addNewRole = (role) => {
    fetch('http://localhost:3001/api/role', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(role)
    }).then(res => res.json());
}

module.exports = { viewAllRoles, addNewRole };