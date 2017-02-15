var pool = require('./db');

var func = {
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
	}
}
module.exports = func;