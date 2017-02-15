var pool = require('./db');

var func = {
	getReplyById : function(pid, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT * FROM `reply` WHERE `id`=?', [pid], function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		        // 接下来connection已经无法使用，它已经被返回到连接池中 
		    })
		});
	}
}
module.exports = func;