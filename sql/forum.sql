-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-02-19 15:44:49
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `forum`
--

-- --------------------------------------------------------

--
-- 表的结构 `list`
--

CREATE TABLE IF NOT EXISTS `list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` varchar(200) NOT NULL,
  `createtime` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `list`
--

INSERT INTO `list` (`id`, `uid`, `title`, `content`, `createtime`) VALUES
(1, 1, '从0到1学习node(一)之模块规范', '在讲解CommonJS, AMD, CMD这些概念之前，我们首先俩了解下js的模块化。模块化，顾名思义，就是将项目按照功能或者其他逻辑进行分解处理，每个部分只处理一个功能，进行功能的解耦处理，方便以后的开发和维护。那么模块化必须具有以下的能力，才能进行模块的拆分和组装：\r\n定义封装的模块；\r\n定义新模块对其他模块的依赖；\r\n可对其他模块的引入支持；\r\n那么就需要一套规范准则来定义这些能力，于是就出', '1487169335'),
(2, 2, '从0到1学习node(二)之搭建http服务器', '本节将要学习如何使用node搭建一个简单的http服务器，学习完本节后能够进行简单的表单提交和书写简单的json接口', '1487401831'),
(3, 2, '从0到1学习node(三)之文件操作', '对于文件和文件夹的操作，文件系统提供了不少的api接口，这里我们从几个样例稍微讲解下文件接口的使用', '1487401977');

-- --------------------------------------------------------

--
-- 表的结构 `reply`
--

CREATE TABLE IF NOT EXISTS `reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `content` varchar(200) NOT NULL,
  `createtime` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `reply`
--

INSERT INTO `reply` (`id`, `pid`, `uid`, `content`, `createtime`) VALUES
(1, 1, 1, '好，非常不错%3Cscript%3Ealert(%22123%22)%3C%2Fscript%3E', '1487340575'),
(2, 1, 1, '数据库连接池正是针对这个问题提出来的，它会负责分配、管理和释放数据库连接，允许应用程序重复使用一个现有的数据库连接，而不是重新建立一个连接，释放空闲时间超过最大允许空闲时间的数据库连接以避免因为连接未释放而引起的数据库连接遗漏。', '1487340975'),
(3, 1, 2, '出于安全考虑node-mysql默认禁止多语句查询（可以防止SQL注入），启用多语句查询可以将multipleStatements选项设置为true', '1487400444'),
(4, 1, 2, '从一开始，就选择了做前端开发，因为觉得前端开发更贴近用户，能够倾听用户的声音，更好玩，更有意思，美的更直观。我们总是在尝试最新的技术，尝试更炫的效果，希望更能优化用户的体验效果！', '1487400625'),
(5, 1, 2, '从一开始，就选择了做前端开发，因为觉得前端开发更贴近用户，能够倾听用户的声音，更好玩，更有意思，美的更直观。我们总是在尝试最新的技术，尝试更炫的效果，希望更能优化用户的体验效果！', '1487400644'),
(6, 1, 2, 'async 提供的api默认支持多种传递参数的写法,我个人比较喜欢用对象表示法来传递( json格式) 但是waterfall 这个api很特殊,不支持对象参数,如果你用下面的错误代码来调用 waterfall 的话,你不会拿到运行结果.', '1487400739'),
(7, 2, 2, 'test<script>alert(''test'')</script>', '1487402121'),
(8, 2, 2, 'wenwenzizi', '1487402202');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(45) NOT NULL,
  `regtime` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `regtime`) VALUES
(1, 'admin', 'b4f6fab95ca6f0dee45fc0da5cd05c8cdf2ca110', '1487169235'),
(2, 'wenzi', '59bb8e88c24f43aabeb505e92f5d1b244bffd04e', '1487395511');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
