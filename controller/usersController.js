const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load User model
const User = require("../models/User");
const Inventory = require("../models/Inventory");

exports.register = (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) 
        return res.status(400).json(errors);
        
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                .save()
                .catch(err => console.log(err));
                });
            });
            const newInventory = new Inventory({
                user: newUser
            })
            newInventory.save()
                .catch(err => console.log(err));

            res.json(newUser);
        }
    });
};


exports.login = (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) 
        return res.status(400).json(errors);
    
    const email = req.body.email;
    const password = req.body.password;
    
    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) 
            return res.status(404).json({ emailnotfound: "Email not found" });
        if (user.password) {
            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };
                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                    expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                    res.json({
                        token, 
                        success: true,
                    });
                    }
                );
                } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
                }
            });
        } else {
            return res.status(404).json({ email: "Please sign in with Google" });
        }
    });
};

exports.googleLogin = (req, res) => {
    /*
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) 
        return res.status(400).json(errors);
    */
    
    
    if (req.body.googleId) { 
        // Find user by googleID
        User.findOne({ googleId: req.body.googleId }).then(user => {
            // Check if user exists
            if (!user) 
                return res.status(404).json({ googleNotFound: "Google login not found" });
            
            const payload = {
                id: user.id,
                name: user.name
            };
            // Sign token
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                res.json({
                    token, 
                    success: true,
                });
                }
            );
        });
    } else {
        return res.status(400).json({google: "Unknown error"});
    }
};

exports.googleRegister = (req, res) => {
   
    if (req.body.googleId) { 
        // Form validation
        // const { errors, isValid } = validateRegisterInput(req.body);
        // Check validation
        // if (!isValid) 
        //     return res.status(400).json(errors);
            
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({ google: "Email already exists" });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    googleId: req.body.googleId
                });
                newUser.save()
                    .catch(err => console.log(err));
                    
                const newInventory = new Inventory({
                    user: newUser
                })
                
                newInventory.save()
                    .catch(err => console.log(err));

                return res.json(newUser);
            }
        });
    } else {
        return res.status(400).json({google: "Unknown error"});
    }
};