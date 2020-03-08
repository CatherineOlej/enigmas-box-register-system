/**
 * File Name: CODatabase.js
 *
 * Revision History:
 *       Catherine Olejarczyk
 */
var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ") : " + error.message);
}

var DB = {
    COCreateDatabase: function () {
        var shortName = "EnigmasBoxDB";
        var version = "1.0";
        var displayName = "DB for EnigmasBox app";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating Database ...");
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess() {
            console.info("Success: Database created successfully.");
        }
    },
    COCreatTables: function () {

        function txFunction(tx) {
            console.info("Creating table: themes...");
            var sqlThemes = ("CREATE TABLE IF NOT EXISTS themes("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);");
            var sqlReset = "DROP TABLE IF EXISTS themes";
            var options = [];

            function successCreate() {
                console.info("Success: Create table: themes successful.");
            }
            tx.executeSql(sqlReset, options, successCreate, errorHandler);
            tx.executeSql(sqlThemes, options, successCreate, errorHandler);
            tx.executeSql('INSERT INTO themes (id, name) VALUES(1, "Disney Escape")');
            tx.executeSql('INSERT INTO themes (id, name) VALUES(2, "Star Wars")');
            tx.executeSql('INSERT INTO themes (id, name) VALUES(3, "Sherlock Holmes")');

            console.info("Creating table: register...");
            var sqlRegister = ("CREATE TABLE IF NOT EXISTS register( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "fullName VARCHAR(30) NOT NULL,"
                + "registerEmail VARCHAR(30)," 
                + "phone INTEGER,"
                + "themeId INTEGER,"
                + "hasFriend VARCHAR(6),"
                + "registerDate DATE,"
                + "FOREIGN KEY(themeId) REFERENCES theme(id));");

            function successCreate() {
                console.info("Success: Create table: register successful.");
            }
            tx.executeSql(sqlRegister, options, successCreate, errorHandler);

        }
        function successTransaction() {
            console.info("Success: Create tables transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    COdropTables: function () {
        function txFunction(tx) {
            var sqlDropThemes = ('DROP TABLE IF EXISTS themes;');
            var sqlDropRegister= ('DROP TABLE IF EXISTS register;');
            var options = [];

            function successDrop() {
                console.info("Success: themes table dropped successfully");
            }
            tx.executeSql(sqlDropThemes, options, successDrop, errorHandler);

            function successDrop() {
                console.info("Success: register table dropped successfully");
            }
            tx.executeSql(sqlDropRegister, options, successDrop, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Drop tables transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};




