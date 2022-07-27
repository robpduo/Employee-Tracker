const viewUtilizedBudget = () => 
    fetch('http://localhost:3001/api/salary', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json());

module.exports = { viewUtilizedBudget };