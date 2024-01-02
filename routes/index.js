const express = require('express');
const router = express.Router();
const apiRoute = require('./apiRoutes.js')
const htmlRoute = require('./htmlRoutes.js')

router.use ("/api", apiRoute) 

router.use ("/", htmlRoute)

module.exports = router; 