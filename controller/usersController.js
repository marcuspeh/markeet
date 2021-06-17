const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const ObjectId = require("mongodb").ObjectId;

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const validatePasswordInput = require("../validation/password");
const validateEmailInput = require("../validation/email");

// Load User model
const User = require("../models/User");
const Inventory = require("../models/Inventory");
const Cashier = require("../models/Cashier");

exports.register = (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) return res.status(400).json(err);
          newUser.password = hash;
          newUser.save().catch((err) => console.log(err));
        });
      });
      const newInventory = new Inventory({
        user: newUser,
      });
      newInventory.save().catch((err) => console.log(err));

      const newCashier = new Cashier({ user: newUser });
      newCashier.save().catch((err) => console.log(err));

      res.json(newUser);
    }
  });
};

exports.login = (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) return res.status(400).json(errors);

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user)
      return res.status(404).json({ emailnotfound: "Email not found" });
    if (user.password) {
      // Check password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name,
          };
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926, // 1 year in seconds
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
    User.findOne({ email: req.body.email }).then((user) => {
      // Check if user exists
      if (!user)
        return res
          .status(404)
          .json({ googleNotFound: "Google login not found" });

      const payload = {
        id: user.id,
        name: user.name,
      };
      // Sign token
      jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 31556926, // 1 year in seconds
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
    return res.status(400).json({ google: "Unknown error" });
  }
};

exports.googleRegister = (req, res) => {
  if (req.body.googleId) {
    // Form validation
    // const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    // if (!isValid)
    //     return res.status(400).json(errors);

    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        return res.status(400).json({ google: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          googleId: req.body.googleId,
        });
        newUser.save().catch((err) => console.log(err));

        const newInventory = new Inventory({
          user: newUser,
        });

        newInventory.save().catch((err) => console.log(err));

        const newCashier = new Cashier({ user: newUser });
        newCashier.save().catch((err) => console.log(err));

        return res.json(newUser);
      }
    });
  } else {
    return res.status(400).json({ google: "Unknown error" });
  }
};

exports.getUser = (req, res) => {
  let userId = req.user.id;
  User.findById(userId, (err, user) => {
    if (err) res.status(400).json(err);
    else res.status(200).json(user);
  });
};

exports.updateName = (req, res) => {
  let userId = req.user.id;
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json(err);
    } else {
      const errors = {};
      const updated = {};

      if (req.body.name !== user.name) {
        if (req.body.name === "") {
          errors.name = "Name field is required";
          return res.status(400).json(errors);
        } else {
          user.name = req.body.name;
          updated.name = "Name updated. Refresh the page to see the change.";
          user.save().then((user) => {
            res.status(200).json({ message: "Edited user", user, updated });
          });
        }
      } else {
        res.status(400).json({ name: "Please enter a new name" });
      }
    }
  });
};

exports.updateEmail = (req, res) => {
  let userId = req.user.id;
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json(err);
    } else {
      const { errors, isValid } = validateEmailInput(req.body);
      const updated = {};

      if (!isValid) return res.status(400).json(errors);

      if (req.body.email !== user.email) {
        User.findOne({ email: req.body.email }).then((result) => {
          if (result) {
            errors.email = "Email already exists";
            return res.status(400).json(errors);
          } else {
            user.email = req.body.email;
            updated.email = "Email updated";
            user.save().then((user) => {
              res.status(200).json({ message: "Edited user", user, updated });
            });
          }
        });
      } else {
        res.status(400).json({ email: "Please enter a new email" });
      }
    }
  });
};

exports.updatePassword = (req, res) => {
  let userId = req.user.id;
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json(err);
    } else {
      const { errors, isValid } = validatePasswordInput(req.body);
      const updated = {};

      if (isValid) {
        bcrypt.compare(req.body.oldPassword, user.password).then((isMatch) => {
          if (isMatch) {
            // old password match =
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) {
                  errors.password = "Unknown error. Please try again.";
                  return res.status(400).json(errors);
                } else {
                  user.password = hash;
                  updated.password = "Password updated";
                  user.save().then((user) => {
                    res
                      .status(200)
                      .json({ message: "Edited user", user, updated });
                  });
                }
              });
            });
          } else {
            errors.oldPassword = "Password incorrect";
            return res.status(400).json(errors);
          }
        });
      } else {
        res.status(400).json(errors);
      }
    }
  });
};
