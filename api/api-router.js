const express = require('express');
const router = express.Router();
const User = require('./api-model')
const { validateUser, authenticateUser} = require('./middleware')

router.get('/users', (req, res) => {
    User.getAll().then(users => {
        res.json(users)
    }).catch(err => console.log(err))
})

router.post('/register', validateUser, (req, res, next) => {
    User.addUser(req.userInfo).then(user => res.json({username: user.username}))
        .catch(next)
})

router.post('/login', validateUser, authenticateUser, (req, res, next) => {
    res.send('success! welcome!')
} )

module.exports = router;