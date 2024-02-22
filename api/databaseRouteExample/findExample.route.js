const express = require('express');
const router = express.Router();
const { findDocuments } = require('../../database/db');

console.log("🆗 /find-example  ");

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Missing or invalid id field in request body. Please provide a valid id.' });
    }    
    findDocuments({ _id: id }, (err, newDoc) => {
        if (!err) {
            res.status(200).json({ data: newDoc });
        } else {
            res.status(500).json({ error: err });
        }
    });
});


module.exports = router;