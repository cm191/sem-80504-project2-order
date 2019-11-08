const { Router } = require('express');
let fs = require('fs');
const logger = require('./logger');

const router = Router();

router.get('/', (req, res) => {
	logger.printLog((data) => {
    		res.send(data);
	});
    	logger.logRequest(`request made for /logs. response returned successfully\n`);
});

module.exports = router;
