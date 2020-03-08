/**
 * File Name: COenigmasBoxDAL.js
 *
 * Revision History:
 *       Catherine Olejarczyk
 */
//CRUD functions for tables
//CRUD theme
var Themes = {
    COselectAll: function (options, callback) {
        function txFunction(tx){
           var sql = "SELECT * FROM themes;";
           tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
}
//CRUD Register
var Register = {
    COinsert: function (options, callback) {
        function txFunction(tx) {
            var sql = "INSERT INTO register (fullName,  registerEmail, phone, themeId, hasFriend, registerDate) VALUES(?,?,?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Insert transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction); 
    },
    COupdate: function (options, callback) {
        function txFunction(tx) {
            var sql = "UPDATE register SET fullName=?, registerEmail=?, phone=?,themeId=?, hasFriend=?,registerDate=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Update transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);   
    },
    COdelete: function (options, callback){
        function txFunction(tx) {
            var sql = "DELETE FROM register WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Delete transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    COselect:function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM register WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    COselectAll: function (options, callback){
        function txFunction(tx) {
            var sql = "SELECT * FROM register;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
    
};