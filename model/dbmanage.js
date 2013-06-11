var client = require("../model/db").client;
var tool   = require("../tool");

select = function(table ,args,callback,response,request){
    var sql = "select * from "+table;
    if(tool.isEmptyObject(args));
    else
    {
        sql+=" where ";
        for(var i in args)
        {
            sql+=i+" = '"+args[i]+"' and ";
        }
        sql = sql.substring(0,sql.length-5);
    }
    client.query(sql, function (err, results)
    {
        if (err)
        {
            throw err;
        }
         else  callback(results,response,args);
    });
}

insert = function(table,args,callback,response,request){
          var sql = "insert into "+table +"(";
         if(tool.isEmptyObject(args)){response.end();return;}
         else
         {
             for(var i in args)
             {
                   sql+=i+",";
             }
             sql = sql.replace(/,$/ ,") values(");
             for(var j in args){
                    sql+="'"+args[j]+"',";
             }
             sql = sql.replace(/,$/ ,");");
         }
    client.query(sql,function (err)
    {
        if (err)
        {
            throw err;
        }
        else callback(response);
    });
}

rechange = function(table,args,callback,response,request){
    var sql="update "+table+" set ";
    for(var i in args)
    {
          sql+= i +"='"+args[i]+"', ";
    }

    sql = sql.replace(/,\s$/ , " where ");
    for(var j in args)
    {
       sql+=j+" = '"+args[j]+"'"
       break;
    }
    client.query(sql,function(err)
    {      if (err)
    {
        throw err;
    }
    else callback(response);

    })
}


exports.select = select;
exports.insert = insert;
exports.rechange =rechange;
