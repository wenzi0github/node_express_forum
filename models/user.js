var pool = require('./db'),
	crypto = require('crypto');

module.exports = {
	// 对字符串进行sha1加密
	hash : function(str){
		return crypto.createHmac('sha1', str).update('love').digest('hex');
	},

	// 登录
	login : function(username, password, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT `id` FROM `user` WHERE `username`=? AND `password`=?', [username, password], function(err, result){
		        if(err) throw err;

		        cb(result);
		        connection.release();
		        // 接下来connection已经无法使用，它已经被返回到连接池中 
		    })
		});
	},

	// 注册
	reg : function(username, password, regtime, cb){
		pool.getConnection(function(err, connection){
		    if(err) throw err;

		    connection.query('SELECT `id` FROM `user` WHERE `username`=?', [username], function(err, sele_res){
		        if(err) throw err;

		        if(sele_res.length){
		        	cb({isExisted:true});
		        	connection.release();
		        }else{
		        	var params = {username:username, password:password, regtime:regtime};
		        	connection.query('INSERT INTO `user` SET ?', params, function(err, insert_res){
				        if(err) throw err;

				        cb(insert_res);
				        connection.release();
				        // 接下来connection已经无法使用，它已经被返回到连接池中 
				    })
		        }
		    })
		});
	}
}