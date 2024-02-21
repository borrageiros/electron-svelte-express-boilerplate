const Datastore = require('nedb');

const db = new Datastore({ filename: "./database/data.db", autoload: true });

function insertDocument(data) {
    db.insert(data, (err, newDoc) => {
        if (!err) {
            return newDoc ? newDoc : null;
        } else {
            console.error(err);
        }
    });
}

function findDocuments(query, callback) {
    db.find(query, (err, docs) => {
        if (!err) {
            callback(null, docs);
        } else {
            console.error(err);
            callback(err, null);
        }
    });
}

module.exports = {
    insertDocument,
    findDocuments
};