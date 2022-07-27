const viewAllDepartments = () => 
    fetch('http://localhost:3001/api/departments', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json());

module.exports = { viewAllDepartments };