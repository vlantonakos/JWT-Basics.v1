const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async (req,res) => {
    const { username,password } = req.body
    //mongo
    //Joi
    //check in controller
    if(!username || !password) {
        throw new CustomAPIError('Please provide email and password',400)
    }
    //just for demo,normally provided by DB
    const id = new Date().getDate()
    const token = jwt.sign({id,username})

    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, John Doe`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard,
}