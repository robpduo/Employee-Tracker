const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// used to retrieve all employee information
router.get('/employees', (req, res) => {
    const sql = 'SELECT * FROM employee';

    db.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        } 
        res.json({
            message: 'success',
            data: result
        });
    });
});


// used to add an employee
router.post('/employee', (req, res) => {
    const sql = 'INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)';
    const params = [req.body.first_name, req.body.last_name, req.body.role_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: result
        });
    });
});

module.exports = router;