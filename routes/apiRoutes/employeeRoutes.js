const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const { route } = require('./departmentRoutes');

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
    const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    const params = [req.body.first_name, req.body.last_name, req.body.role_id, req.body.manager_id];

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

// update an employee role
router.put('/employee/:id', (req, res) => {
    const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
    const params = [req.body.role, req.params.id];

    db.query(sql, params, (err, result) => {
        if(err) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: result
        });
    });
})

module.exports = router;