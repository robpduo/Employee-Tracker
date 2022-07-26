const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

//retrieve all department records
router.get('/departments', (req, res) => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (rows.length > 0) {
            res.json({
                message: 'success',
                data: rows
            });
        } else {
            res.status(500).json('No Departments Exists');
        }
    });
});

//get a specific department name by id from the url
router.get('/department/:id', (req, res) => {
    const sql = `SELECT * FROM department WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: res.message });
        }

        res.json({
            message: 'department found!',
            data: row
        });
    });
});

//add a department
router.post('/department', (req, res) => {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [req.body.name];

    // check if name of the department has been added
    if (req.body.name != null) {
        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(400).json('Add department failed!');
            } else {
                res.json({
                    message: `Department: ${req.body.name} added!`,
                });
            }
        });

    } else {
        res.status(400).json('No department name specified!');
    }
});

module.exports = router;