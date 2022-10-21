const express =require("express");
const { common } = require("../controllers/user");
const router =express.Router();

router.get('/user',common)

module.exports = router