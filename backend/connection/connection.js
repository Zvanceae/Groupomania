const db = require('mysql');

const connection_db = db.createPool({
    host:       'localhost',
    database:   'grupomania',
    user:       'root',
    password:   'rootVulpe!'
});

connection_db.getConnection((err,connection)=> {
    if(err) throw err;
    console.log('Database connected successfully');
    connection.release();
  });

module.exports = connection_db;