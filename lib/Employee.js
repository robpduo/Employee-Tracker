const viewAllEmployees = () =>
    fetch('http://localhost:3001/api/employees', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data => console.table(data.data));


module.exports = { viewAllEmployees };