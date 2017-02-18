var express = require('express');
var router = express.Router();

var list_m = require('../models/list');

router.get('/', function(req, res, next) {
	list_m.getIndexList(function(result){
		res.render('index', { data:result }); // 选择index模板并传递数据
	})
});

module.exports = router;