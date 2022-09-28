const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const fs = require("fs");

let url = "";
fs.open("mongo_url.txt", "r", (err, file) => {
    if (err) throw err;
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        console.log(data.toString());
        url = data.toString();
    });
});

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    // Connecting to mongo database
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;

        const datab = db.db("PPC");
        datab.collection("user-data").findOne({}, function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
