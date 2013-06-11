/**
 * Created with JetBrains WebStorm.
 * User: king
 * Date: 13-6-3
 * Time: 下午11:35
 * To change this template use File | Settings | File Templates.
 */
var dbmanage = require("../model/dbmanage");
var tool     = require("../tool");
 index = function(response, request, arguments)
 {
    var callback = function(results,response)
    {
        response.write(JSON.stringify(results));
        response.end();
    };
     dbmanage.select("news",arguments,callback,response) ;
 }

 add = function(response, request, arguments)
 {
     var callback = function (response)
     {
         response.write("1");
         response.end();
     };
      dbmanage.insert("news",arguments,callback,response);
 }

 get = function(response, request, arguments)
 {
      var callback = function(results,response)
      {
          response.write(JSON.stringify(results));
          response.end();
      }
       dbmanage.select("news",arguments,callback,response);
 }

  follow= function(response,request,arguments)
  {
      var args={};
      args.id=arguments.id;
      var args1 = arguments;
      var callback1=function(response){
          response.write("1");
          response.end();
      }
      var callback = function(results,response)
      {
           if( results[0].Follow_id=="")results[0].follow+=args1.follow;
           else results[0].Follow_id+=","+args1.follow;

           results[0].Follow_id = tool.noRepeat(results[0].Follow_id);
          dbmanage.rechange("news",{id:args1.id,Follow_id: results[0].Follow_id},callback1,response);
      }
       dbmanage.select("news",args,callback,response);
  }

exports.index = index;
exports.add   = add;
exports.get   = get;
exports.follow = follow;