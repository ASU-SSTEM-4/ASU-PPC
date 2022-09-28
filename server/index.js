const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const secrets = require("./secrets");

const url = secrets.mongo_url;

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    // Connecting to mongo database
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;

        const datab = db.db("PPC");
        datab.collection("ProfessorInfo").findOne({}, function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
