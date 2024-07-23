const express = require("express");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

require("./config/DataBase.js").connect();

const userRoutes = require("./Routes/User");

app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});
