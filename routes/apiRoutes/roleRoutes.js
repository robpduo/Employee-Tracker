const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

router.get('/roles', (req, res) => {
    const sql = 'SELECT * FROM role';

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

router.post('/role', (req, res) => {
    const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    const params = [req.body.title, req.body.salary, req.body.department_id];

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