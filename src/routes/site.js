const express = require('express');
const router = express.Router();

const sitesController = require('../app/controllers/SiteController.js');

router.use('/search', sitesController.search);
router.use('/', sitesController.index);


module.exports = router;