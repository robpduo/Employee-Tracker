const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

router.get('/employees', (req, res) => {
    const sql = 'SELECT * FROM employee';

    db.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } 
        res.json({
            message: 'success',
            data: result
        });
    });
});

module.exports = router;