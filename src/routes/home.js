const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')
router.get('/',navigationController.getHome)
router.get('/:id',navigationController.buscarCamion)
module.exports = router;