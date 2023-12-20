const express = require('express');

const { InfoController, EmailController } = require('../../controller');

const router = express.Router();

router.get('/info', InfoController.info);

router.post('/tickets', EmailController.create);

module.exports = router;