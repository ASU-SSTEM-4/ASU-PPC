const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://team4:sstem@asu-ppc-data.gg5ivqy.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
    // Connecting to mongo database
    res = MongoClient.connect(url, function(err, db) {
        if (err) throw err;

        const datab = db.db("PPC");
        datab.collection("user-data").findOne({}, function(err, res) {
            if (err) throw err;
            console.log(res.message);
            db.close();
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});