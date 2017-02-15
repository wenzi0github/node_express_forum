var express = require('express');
var router = express.Router();

var list_m = require('../models/list');


// http://127.0.0.1:3000/list/1.html
router.get('/:pid.html', function(req, res, next) {
	// var pid = req.query.pid || 1;
	// console.log(req.query);
	// console.log(req.params);
	var pid = req.params.pid || 1;

	list_m.getListById(pid, function(result){
		res.render('list', { data:result[0] }); // 选择index模板并传递数据
	})
});

module.exports = router;
