const Database = require("../database/config");

module.exports = {
    async create(req, res) {
        const database = await Database();
        const password = req.body.password;
        let roomId = [];
        let isRoom = true;

        while(isRoom) {

            // generate room number
            for (var index = 0; index < 6; index++) {
            roomId += Math.floor(Math.random() * 10).toString();
            }

            // Check room number
            const roomExistIds =  await database.all(`SELECT id FROM rooms `);
            isRoom = roomExistIds.some(roomExistId => roomExistId === roomId); 
            if(!isRoom) {
                // Insert room in the dabase
                await database.run(`INSERT INTO rooms (
                    id,
                    password
                ) VALUES (
                    ${parseInt(roomId)},
                    '${password}'
                )`);

            }  
              
        }
        await database.close();

        res.redirect(`/room/${roomId}`);   
    },

    open(req, res) {
        const roomId = req.params.room
        res.render("room", {roomId:roomId});
    }
}