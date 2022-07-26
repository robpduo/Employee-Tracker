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

module.exports = router;