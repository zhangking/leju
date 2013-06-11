var server = require("./server");
var router = require("./router");

var user   = require("./action/user");
var news   =require("./action/news");
var friends=require("./action/friends");
var comment=require("./action/comment");
var handle = {};


handle["/login"]     = user.login;
handle["/adduser"]   = user.add;

handle["/news"]      = news.index;
handle["/addnews"]   = news.add;
handle["/getnews"]   = news.get;
handle["/follow"]    = news.follow;

handle["/getfriend"] = friends.getfriend;
handle["/addfriend"] = friends.addfriend;

server.start(router.route , handle);
server.startsocket();


