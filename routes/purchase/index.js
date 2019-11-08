const { Router } = require('express');
let fs = require('fs');
const logger = require('../logs/logger');

const router = Router();

const validItems = ["Hotdog", "Hamburger", "Soda", "Cookie"];

router.post('/:item/:quantity', (req, res) => {
    if(!validItems.includes(req.params.item)) {
        res.send(`ERROR: ${req.params.item} is not a valid item to order`);
        logger.logRequest('purchase', Date.now(), 'fail');
    }
    else {
        res.send(`You ordered ${req.params.quantity} ${req.params.item}(s)`);
        logger.logRequest('purchase', Date.now(), 'success');
        logger.logOrder(req.params.item, req.params.quantity);
    }
});

module.exports = router;