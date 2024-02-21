const express = require('express');
const router = express.Router();
const db = require('../../database/db');

router.get('/', async (req, res) => {
    try {
        db.insertDocument({ name: 'John', age: 30 });

        db.findDocuments({ name: 'John' }, (err, data) => {
            if (err) {
                res.status(500).json({ error: 'Error en el servidor' });
            } else {
                res.status(200).json({ status: "ON - OK 200", data });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

module.exports = router;