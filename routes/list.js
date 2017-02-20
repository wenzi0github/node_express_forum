var express = require('express');
var router = express.Router();
var async = require('async');

var list_m = require('../models/list');


// http://127.0.0.1:3000/list/1.html
router.get('/:pid.html', function(req, res) {
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

router.get('/addreply', function(req, res){
	if(req.session.user){
		var pid = parseInt(req.query.pid),
			content = req.query.content,
			uid = req.session.user.uid,
			createtime = parseInt(Date.now()/1000);

		var params = {pid:pid, uid:uid, content:content, createtime:createtime};
		console.log(params);
		list_m.addReply(params, function(result){
			// console.log(result);
			if(result.affectedRows){
				res.json({code:0, msg:'回复成功', data:{rid:result.insertId ,createtime:createtime}});
			}else{
				res.json({code:2, msg:'回复失败，请重新尝试'})
			}
		});
		
	}else{
		res.json({code:1, msg:'您还未登录'})
	}
});

router.get('/addtopic', function(req, res){
	if(req.session.user){
		var title = req.query.title,
			content = req.query.content,
			uid = req.session.user.uid,
			createtime = parseInt(Date.now()/1000);

		var params = {uid:uid, title:title, content:content, createtime:createtime};

		list_m.addTopic(params, function(result){
			// console.log(result);
			if(result.affectedRows){
				res.json({code:0, msg:'添加成功', data:{url:'/list/'+result.insertId+'.html', title:title, author:req.session.user.username, createtime:createtime}});
			}else{
				res.json({code:2, msg:'添加失败，请重新尝试'})
			}
		});
		
	}else{
		res.json({code:1, msg:'您还未登录'})
	}
})

module.exports = router;
