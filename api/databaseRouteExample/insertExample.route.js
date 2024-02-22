const express = require('express');
const router = express.Router();
const { insertDocument } = require('../../database/db');

console.log("🆗 /insert-example  ");

router.post('/', (req, res) => {
    const { name, age } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Missing or invalid name field in request body. Please provide a valid name.' });
    }
    if (!age) {
        return res.status(400).json({ error: 'Missing or invalid age field in request body. Please provide a valid age.' });
    }
    insertDocument({ name, age }, (err, newDoc) => {
        if (!err) {
            res.status(200).json({ data: newDoc });
        } else {
            res.status(500).json({ error: err });
        }
    });
});


module.exports = router;