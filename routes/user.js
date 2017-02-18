var express = require('express');
var router = express.Router();
var user_m = require('../models/user');

// 个人中心，暂不开放，直接跳转到首页
router.get('/', function(req, res, next) {
  res.redirect('/');
});

// 进入到登录页面
router.get('/login', function(req, res, next) {
  res.render('login', {errmsg:''});
});

// 处理登录请求
router.post('/login', function(req, res, next) {
	// console.log(req.body.username, req.body.password);
	var username = req.body.username || '',
			password = req.body.password || '';

	var password_hash = user_m.hash(password);

	user_m.login(username, password_hash, function(result){
		if(result.length){
			// console.log( req.session );
			req.session.user = {
				uid : result[0].id,
				username : username
			}
			res.redirect('/');
		}else{
			// console.log('登录失败');
			res.render('login', {errmsg:'用户名或密码错误'});
		}
	});
});

// 展示注册页面
router.get('/reg', function(req, res, next){
	res.render('reg', {errmsg:''});
});

// 处理注册数据
router.post('/reg', function(req, res, next){
	var username = req.body.username || '',
			password = req.body.password || '',
			password2 = req.body.password2 || '';

	if(password!=password2){
		res.render('reg', {errmsg:'密码不一致'});
		return;
	}
	var password_hash = user_m.hash(password),
			regtime = parseInt(Date.now()/1000);
	user_m.reg(username, password_hash, regtime, function(result){
		if(result.isExisted){
			res.render('reg', {errmsg:'用户名已存在'});
		}else if(result.affectedRows){
			req.session.user = {
				uid : result.insertId,
				username : username
			}
			res.redirect('/');
		}else{
			// console.log('登录失败');
			res.render('reg', {errmsg:'注册失败，请重新尝试'});
		}
	});
	// res.render('reg', {errmsg:''});
});

// 登出
router.get('/logout', function(req, res, next){
	req.session.destroy();
  res.redirect('/user/login');
})

module.exports = router;
