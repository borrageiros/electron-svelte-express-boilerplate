const express = require('express');
const router = express.Router();
const { updateDocument, findDocuments } = require('../../database/db');

console.log("🆗 /update-example  ");

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Missing or invalid name field in request body. Please provide a valid name.' });
    }
    if (!age) {
        return res.status(400).json({ error: 'Missing or invalid age field in request body. Please provide a valid age.' });
    }

    const query = { _id: id };

    const update = {};
    if (name) update.name = name;
    if (age) update.age = age;

    const options = { multi: false };

    updateDocument(query, { $set: update }, options, (err, numAffected, affectedDocuments, upsert) => {
        if (!err) {
            if (numAffected === 0) {
                return res.status(404).json({ error: 'Document not found for the provided ID.' });
            }
            findDocuments({ _id: id }, (err, newDoc) => {
                if (!err) {
                    res.status(200).json({ message: 'Document updated successfully.', affectedDocuments, data: newDoc });
                } else {
                    res.status(500).json({ error: err });
                }
            });
        } else {
            res.status(500).json({ error: err });
        }
    });
});

module.exports = router;
