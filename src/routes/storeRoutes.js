const express = require('express');
const storeController = require('../controllers/storeController');

const router = express.Router();

router.get('/isopen', storeController.isOpen);

module.exports = router;