var dbmanage = require("../model/dbmanage");
var fs = require('fs');
var login;
var add;

login = function (response, request, arguments)
{
    var callback = function (result,response,arguments)
    {
            if(result.length!=0&&result[0].Password == arguments.Password)
            {
                  response.write("true");
            }
            else response.write("false");

         response.end();
    };
    dbmanage.select("user",arguments,callback,response,request) ;
};

add = function(response, request, arguments){
   /*if(request.files){
    var tmp_path = request.files.image.path;
    var imagename =new Date().getMilliseconds();
    imagename = imagename.toString()+".jpg";
    var target_path = './news/' + imagename;
    fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        fs.unlink(tmp_path, function() {
            if (err) throw err;
        });
    })
     arguments.Photo=target_path;
   }    */
     var callback= function(response){
          response.write("true");
          response.end();
     };
    dbmanage.insert("user",arguments,callback,response,request)
}

 getuser = function(response, request, arguments){
    var callback = function(results,response){
        response.write(JSON.stringify(results));
        response.end();
    }
     dbmanage.select("user",arguments,callback,response) ;
 }

exports.getuser = getuser;
exports.login = login;
exports.add  = add;