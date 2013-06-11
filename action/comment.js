/**
 * Created with JetBrains WebStorm.
 * User: king
 * Date: 13-6-6
 * Time: 下午3:58
 * To change this template use File | Settings | File Templates.
 */
var client = require("../model/db").client;
var map  ={};
var sockets   =[];
var process = function(data,socket)
{
     data = eval("("+data+")");
    if(data.user_id)
    {
        sockets.push(socket);
        var l = sockets.length-1;
        eval("map.a"+data.user_id+"="+l);
    }
    else
    {
        var to_list = data.to_id.split(",");
       for(var i = 0,l=to_list.length;i<l;i++)
       {
         var a= "a"+to_list[i];
         var p = eval("map."+a);
         if(p)
         {
               sockets[p].write(data.content);
         }
         else
         {
             var sql = "insert into comment (From_id,To_id,Content) values('"+data.from_id+"','"+to_list[i]+"','"+data.content+"')";
              client.query(sql);
         }
       }
    }

}
var over = function(socket)
{
    var index = sockets.indexOf(socket);
    sockets.splice(sockets.indexOf(socket), 1);
    for(var i in map)
    {
        if(map[i]==index)
        {
            eval("delete map."+i);
        }

    }
}
exports.process = process;
exports.over = over;
