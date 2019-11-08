const { Router } = require('express');
const router = Router();

const version = require('./version');
const getmenu = require('./getmenu');
const purchase = require('./purchase');

router.get('/', (req, res) => {
	res.send('hello\n');
});

router.use('/version', version);
router.use('/getmenu', getmenu);
router.use('/purchase', purchase);

module.exports = router;
