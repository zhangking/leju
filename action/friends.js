/**
 * Created with JetBrains WebStorm.
 * User: king
 * Date: 13-6-6
 * Time: 下午3:41
 * To change this template use File | Settings | File Templates.
 */
var dbmanage = require("../model/dbmanage");

var getfriend = function(response, request, arguments)
{
     var callback = function(results,response)
     {
         response.write(JSON.stringify(results));
         response.end();
     }
    dbmanage.select("friends",arguments,callback,response);
}

var addfriend =  function(response, request, arguments)
{
    var callback= function(response){
        response.write("true");
        response.end();
    };
      dbmanage.insert("friends",arguments,callback,response)
}


exports.addfriend =addfriend;
exports.getfriend =getfriend;

