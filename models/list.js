var pool = require('./db');

var func = {
	// 获取首页的主题
	getIndexList : function(cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT `list`.*, username FROM `list`, `user` WHERE `list`.`uid`=`user`.`id`', function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		        // 接下来connection已经无法使用，它已经被返回到连接池中 
		    })
		});
	},

	// 根据id查询主题的详情信息
	getListById : function(id, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT * FROM `list` WHERE `id`=?', [id], function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		        // 接下来connection已经无法使用，它已经被返回到连接池中 
		    })
		});
	},

	// 某主题的回复
	getReplyById : function(pid, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT * FROM `reply` WHERE `pid`=?', [pid], function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		        // 接下来connection已经无法使用，它已经被返回到连接池中 
		    })
		});
	},

	/*
		添加回复
		pid, uid, content, createtime
	*/
	addReply : function(params, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('INSERT INTO `reply` SET ?', params, function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		        // 接下来connection已经无法使用，它已经被返回到连接池中 
		    })
		});
	},

	/*
		添加主题
		uid, title, content, createtime
	*/
	addTopic : function(params, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('INSERT INTO `list` SET ?', params, function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		        // 接下来connection已经无法使用，它已经被返回到连接池中 
		    })
		});
	}
}
module.exports = func;