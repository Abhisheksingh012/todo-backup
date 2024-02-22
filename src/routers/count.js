const express = require('express');
const { getCount } = require('../controllers/countController');
const router = express.Router();

router.get('/',getCount);


module.exports = router;