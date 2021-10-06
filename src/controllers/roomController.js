const Database = require("../database/config");

module.exports = {
    async create(req, res) {
        const db = await Database();
        const pass = req.body.password;
        let roomId = [];
        let isRoom = true;

        while(isRoom) {

            // generate room number
            for (var index = 0; index < 6; index++) {
            roomId += Math.floor(Math.random() * 10).toString();
            }

            // Check room number
            const roomExistIds =  await db.all(`SELEC * FROM rooms `);
            isRoom = roomExistIds.some(roomExistId => roomExistId === roomId); 
            if(!isRoom) {
                // Insert room in the dabase
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`);

                await db.close();

                res.redirect(`/room/${roomId}`);    
            }    
        }
    }
}