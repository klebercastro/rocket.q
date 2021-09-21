module.exports = {
    create(req, res) {
        let roomId = 132455
        res.redirect(`/room/${roomId}`);        
    }
}