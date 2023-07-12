const express = require('express')
const authMiddleware  =require('../middlewares/auth') 

const mainRouter =express.Router()
const {login , dashboard } = require('../controller/main')


mainRouter.route('/dashboard').get(authMiddleware,dashboard)
mainRouter.route('/login').post(login)


module.exports = mainRouter