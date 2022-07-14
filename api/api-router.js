const express = require('express');
const router = express.Router();
const User = require('./api-model')
const { validateUser } = require('./middleware')

router.get('/users', (req, res) => {
    User.getAll().then(users => {
        res.json(users)
    }).catch(err => console.log(err))
})

router.post('/register', validateUser, (req, res, next) => {
    User.addUser(req.userInfo).then(user => res.json(user))
        .catch(next)
})



module.exports = router;