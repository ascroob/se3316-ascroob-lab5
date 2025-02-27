const User = require('../models/user.model');
const mongoose = require('mongoose');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the user Test controller!');
};

exports.user_create = function (req, res, next) {
    let user = new User(
        {
            username: req.body.username,
            manager: req.body.manager,
            active: req.body.active
        }
    );

    user.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.send(user);
    })
}; //create new user using the data coming from a POST request and save to database.

//Retrieve and return all notes from the database.
exports.user_findAll = function (req, res, next) {

    User.find({}, function (err, results){
       console.log(results); 
       res.send(results);
    });
};

exports.user_update_manager = function (req, res, next){
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, {$set: {manager: req.body.manager}}, function (err, user) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.send(user);
    });
};