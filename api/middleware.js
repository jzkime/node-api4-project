const User = require('./api-model');
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
    },

    async authenticateUser(req, res, next) {
        try{
            const { id } = req.params;
            const found = await User.findUser(req.userInfo);
            if(!found) next({status: 404, message: "there is no user by those credentials!"})
            req.userTrue = found;
            if(found.password !== req.userInfo.password) next({status: 404, message: "incorrect password"})
            next();
        } catch(err) {
            next(err)
        }
    }
}