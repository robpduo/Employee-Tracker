const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// view all roles
router.get('/salary', (req, res) => {
    const sql = 'SELECT employee.first_name, employee.last_name, role.salary FROM employee LEFT JOIN role ON employee.id = role.id';

    db.query(sql, (err, result) => {
        if (err) {
            res.status.apply(400).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: result
        });
    });
});

module.exports = router;