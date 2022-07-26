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

module.exports = router;