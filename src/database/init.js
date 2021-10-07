const Database = require("./config");

const initDB = {
    async init() {
        const database = await Database();
        
        await database.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            password TEXT

        )`);
        
        await database.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await database.close();
    }
}
initDB.init();