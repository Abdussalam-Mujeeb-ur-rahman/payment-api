const { json } = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const db = require("../model");
const userModel = db.users;

const isAuthenticated = async (req,res,next)=>{
    const token = req.cookies['token']
    try {
        if(!token){
            return res.send('you are currently unauthorized!. Please login or signup')
        }
        try {
            var verify = jwt.verify(token, process.env.JWT_SECRET);
           
        } catch (error) {
            console.log(`error from verify ${error}`)
             return res.send('you are currently unauthorized!. Please login or signup')
        }

        const id = verify.id

        try {
            req.user = await userModel.findOne({where:{id: id}});
            // req.user = JSON.stringify(req.user)
        } catch (error) {
            console.log(`error from userModel ${error}`)
            res.send('Database timeout!, please refresh your page or try again later!')
        }

        next();
    } catch (error) {
       return next(error); 
    }
}

module.exports = isAuthenticated;