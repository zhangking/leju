var server = require("./server");
var router = require("./router");

var user   = require("./action/user");
var news   =require("./action/news");
var friends=require("./action/friends");
var comment=require("./action/comment");
var  file  =require("./action/file");

var handle = {};


handle["/login"]     = user.login;
handle["/adduser"]   = user.add;
handle["/getuser"]   = user.getuser;

handle["/news"]      = news.index;
handle["/addnews"]   = news.add;
handle["/getnews"]   = news.get;
handle["/follow"]    = news.follow;

handle["/getfriend"] = friends.getfriend;
handle["/addfriend"] = friends.addfriend;

handle["/getcomment"]=comment.getcomment;

handle["/getfile"]   =file.getfile;
handle["/addfile"]   =file.addfile;

server.start(router.route , handle);
server.startsocket();


