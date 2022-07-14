module.exports = {

    validateUser(req, res, next) {
        try{
            const { username, password } = req.body
            if(!username || !username.trim().length ) return res.status(400).json({message: "invalid name field"});
            if(!password || password.trim() === "" ) return res.status(400).json({message: "invalid password field"});
            let name = username.trim()
            let pass = password.trim()
            req.userInfo = {username: name, password: pass};
            next()
        } catch(err) {
            next(err)
        }
    }
}