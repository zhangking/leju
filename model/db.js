var db_options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'wei'
};
var mysql = require('mysql'),client = null;

    client = mysql.createConnection(db_options);
    client.connect(function(err) {
        if(err) {
            console.error('connect db ' + client.host + ' error: ' + err);
            process.exit();
        }
    });
exports.client = client;
