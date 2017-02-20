# express构建一个简单的论坛系统  

这是使用express搭建的简易论坛系统。博客可以访问：[从0到1学习node(七)之express搭建简易论坛](https://www.xiabingbao.com/node/2017/02/20/node-express-forum.html) 

将代码下载到本地后：  

1. `npm install --save-dev` 安装所依赖的模块；  
2. 在mysql中创建`forum`数据库，然后导入`sql/forum.sql`文件；  
3. 修改`models/db.js`中的数据库连接信息  

完成执行：  

```
$npm start
```

在浏览器中访问`127.0.0.1:3000`就可以正常访问了