const { Router } = require('express');
let fs = require('fs');
const logger = require('../logger/logger');

const router = Router();

router.get('/', (req, res) => {
    res.send('This is version 1 of the HotBurger service');
    logger.logRequest('version', Date.now(), 'success');
});

module.exports = router;