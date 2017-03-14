var mysql = require('mysql');
var config = require('../config.js')
var connection = mysql.createConnection(config)

connection.connect();
console.log('数据库连接成功！')

exports.index = function (sql, callback) {
    callback = callback || function(){}
    connection.query(sql, function (er, relt) {

        if(er) console.log(er.stack);
        if(er == null)callback(relt)
    })
}