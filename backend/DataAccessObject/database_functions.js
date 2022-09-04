const database = require('../connection/connection.js');

module.exports = {

    /* Error handling and funtion scheme
    Table can be any table from the database and the payload is the object following the database structures */
    insertRecord: (table, payload) => {
        const statement = 'INSERT INTO ?? SET ?';
        return new Promise((resolve, reject) => {
            database.query(statement, [table, payload], (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    },

    // Get record simple will use a simple WHERE statement
    getRecordSimple: (table, row, variable) => {
        const statement = 'SELECT * FROM ?? WHERE ?? = ?';
        return new Promise((resolve, reject) => {
            database.query(statement, [table, row, variable], (error, response) => {
                if (error) 
                    return reject(error);
                else if (response.length === 0)
                    return reject('No user found')
                else 
                   return resolve(response);
            });
        });
    },

    updateRecord: (table, payload, row, variable) => {
        const statement = 'UPDATE ?? SET ? WHERE ?? = ?';

        return new Promise((resolve, reject) => {
            database.query(statement, [table, payload, row, variable], (error, response) => {
                if (error) return reject(error);
                return resolve(response);
            });
        });
    }
}
