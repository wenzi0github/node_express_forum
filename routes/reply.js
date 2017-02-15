var express = require('express');
var router = express.Router();

var reply_m = require('../models/reply');

router.get('/', function(req, res, next) {
	var pid = req.query.pid || 1;
	// console.log(req.query);
	// console.log(req.params);
	// var pid = req.params.pid || 1;

	reply_m.getReplyById(pid, function(result){
		res.json({ code:0, data:result });
	})
});

module.exports = router;
