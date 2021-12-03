"use strict";
const database = require('../models/userInfo.js');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = "secretkey123456";

var userController = {
    registerUser : registerUser,
    loginUser : loginUser
}

//If user alreary exists
const findUserByEmail = (userName, cb) => {
    return database.get(
        `SELECT * FROM userInfo WHERE userName = ?`, [userName], (err, row) =>{
            cb(err, row)
        }
    );
}

//If user is not existing
const createUser = (userInfo, cb) => {
    return database.run(
        `INSERT INTO userInfo (userName, password, roleId) VALUES (?, ?, ?)`, userInfo, (err) => {
            cb(err)
        }
    );
}

function registerUser(req, res){
    //Get values from request body
    const roleId = req.body.roleId;
    const userName = req.body.userName;
    const password = bcrypt.hashSync(req.body.password);

    createUser([userName, password, roleId], (err) => {
        if (err)
            return res.status(500).send("Email already exists !");
        //If email exists, error is displayed and out of the whole loop
        //If email isnt' existing, inserts the data

        //Now we have to find the inserted data to return with token
        findUserByEmail(userName, (err, userInfo) => {
            if (err)
                return res.status(500).send('Server Error !');
            const expiresIn = 24 * 60 * 60;     //One day token validity
            const accessToken = jwt.sign({id : userInfo.id}, SECRET_KEY, {
                expiresIn : expiresIn
            });
            res.status(200).send({
                "user" : userInfo,
                "accessToken" : accessToken,
                "expires_in" : expiresIn
            });
        });
    });
}

function loginUser(req, res) {
    const userName = req.body.userName;
    const password = req.body.password;
    //Go thorugh the database to find the email
    findUserByEmail(userName, (err, userInfo) => {
        if (err) 
            return res.status(500).send('Server error !');
        if (!userInfo)
            return res.status(404).send('Register Yourself !');
        //Compare the entered password and password in database
        const result = bcrypt.compareSync(password, userInfo.password);
        if (!result)
            return res.status(401).send('Wrong password !');

        //If all if conditions are bypassed, generate token
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({id : userInfo.id}, SECRET_KEY, {
            expiresIn : expiresIn
        });
        res.status(200).send({
            "user" : userInfo,
            "accessToken" : accessToken,
            "expires_in" : expiresIn,
            "roleId" : userInfo.roleId
        });
    });
}


module.exports = userController;