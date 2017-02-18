var express = require('express');
var router = express.Router();
var async = require('async');

var list_m = require('../models/list');


// http://127.0.0.1:3000/list/1.html
router.get('/:pid.html', function(req, res, next) {
	// var pid = req.query.pid || 1;
	// console.log(req.query);
	// console.log(req.params);
	var pid = req.params.pid || 1;

	async.parallel([
		function(callback){
			list_m.getListById(pid, function(result){
				callback(null, result[0]);
			})
		},
		function(callback){
			list_m.getReplyById(pid, function(result){
				callback(null, result);
			})
		},
	], function(err, results){
		// console.log( results );
		// res.json(results);
		res.render('list', { data:results });
	})
	
});

module.exports = router;
