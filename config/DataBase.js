const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGOB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("Database connection established"); })
    .catch((err) => {
        console.log("Database connection failed");
        console.log(err);
        process.exit(1);
    });
};
