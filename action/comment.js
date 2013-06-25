/**
 * Created with JetBrains WebStorm.
 * User: king
 * Date: 13-6-6
 * Time: 下午3:58
 * To change this template use File | Settings | File Templates.
 */
var client = require("../model/db").client;
var dbmanage = require("../model/dbmanage");
var map  ={};
var sockets   = new Array();

Array.prototype.addsocket = function(socket)
{
       for(var i=0;i<this.length;i++)
       {
           if(this[i]==0)
           {
           this[i]=socket;
            return i;
           }
        }
        this.push(socket);
        return i;
}
var process = function(data,socket)
{
     data = eval("("+data+")");
    if(data.user_id)
    {
        var l = sockets.addsocket(socket);
        eval("map.a"+data.user_id+"="+l);
    }
    else
    {
       var to_list = data.to_id.split(",");
       for(var i = 0,l=to_list.length;i<l;i++)
       {
         var a= "a"+to_list[i];
         var p = eval("map."+a);
         if(p!=null)
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
    sockets[index]=0;
    for(var i in map)
    {
        if(map[i]==index)
        {
            eval("delete map."+i);
        }

    }
}

var getcomment = function(response, request, arguments)
{
    var callback = function(results,response)
    {
        response.write(JSON.stringify(results));
        response.end();
    }
    dbmanage.select("comment",arguments,callback,response);
}


exports.getcomment=getcomment;
exports.process = process;
exports.over = over;
