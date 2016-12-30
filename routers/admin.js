var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('admin-user');
//res.render('main/index');
});

module.exports = router;