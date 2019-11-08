const { Router } = require('express');
let fs = require('fs');
const logger = require('../logger/logger');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hotdog: $20\nHamburger: $35\nSoda: $4\nCookie: $6');
    logger.logRequest('getmenu', Date.now(), 'success');
});

module.exports = router;