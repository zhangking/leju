var http = require("http");
 var url = require("url");
 var querystring =require("querystring");
 var comment = require("./action/comment");
var net = require('net');

 function start(route, handle)
 {
 function onRequest(request, response) {
 var pathname = url.parse(request.url).pathname;
 var arguments= querystring.parse(url.parse(request.url).query);
 route(handle, pathname, response, request,arguments);
 }
 http.createServer(onRequest).listen(3000);
 }

 function startsocket()
 {
     var s = net.Server(function (socket) {

         socket.on('data', function (d)
         {
            comment.process(d,socket);
          });

         socket.on('close', function ()
         {
                   comment.over(socket);
         });
     });
     s.listen(6000);
 }
 exports.startsocket = startsocket;
 exports.start = start;


