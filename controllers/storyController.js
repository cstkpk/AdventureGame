const db = require("../models/story.js");

//Defining methods for the storyController
module.exports = {
    create: function(req, res) {
        console.log(req.body);
        // console.log(req.params);
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        console.log(req.body);
        db
            .findOneAndUpdate({ _id: req.params.id}, {$push: req.body})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};