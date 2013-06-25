/**
 * Created with JetBrains WebStorm.
 * User: king
 * Date: 13-6-25
 * Time: 下午5:52
 * To change this template use File | Settings | File Templates.
 */
var dbmanage = require("../model/dbmanage");
var  addfile = function(response, request, arguments)
{
    var callback = function (response)
    {
        response.write("true");
        response.end();
    };
  dbmanage.insert("file",arguments,callback,response);
}
var  getfile = function(response, request, arguments)
{
    var callback = function(results,response)
    {
        response.write(JSON.stringify(results));
        response.end();
    };
    dbmanage.select("file",arguments,callback,response) ;
}

exports.addfile = addfile;
exports.getfile = getfile;