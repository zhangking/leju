var dbmanage = require("../model/dbmanage");
var login;
var add;

login = function (response, request, arguments)
{
    var callback = function (result,response,arguments)
    {
            if(result.length!=0&&result[0].Password == arguments.Password)
            {
                  response.write("1");
            }
            else response.write("0");

         response.end();
    };
    dbmanage.select("user",arguments,callback,response,request) ;
};

add = function(response, request, arguments){
     var callback= function(response){
          response.write("1");
          response.end();
     };
    dbmanage.insert("user",arguments,callback,response,request)
}

exports.login = login;
exports.add   = add;