const express = require("express");
const router = express.Router();

const { sign_up } = require("../controllers/Auth");

router.post("/signup", sign_up);

module.exports = router;
