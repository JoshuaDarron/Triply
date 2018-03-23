// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {
    
    createTrip: (req, res) => {
        db
            .Trip
            .create(req.body)
            .then(dbTrip => {
                res.json(dbTrip);
            })
            .catch(err => console.error(err));
    }, // END CREATE

    findAllTrip: (req, res) => {
        db
            .Trip
            .findAll({})
            .then(dbTrip => {
                res.json(dbTrip);
            })
            .catch(err => console.error(err));
    }, // END FIND ALL

    findOneTrip: (req, res) => {
        db
            .Trip
            .findOne({
                where: {
                    UserId: req.params.id
                }
            })
            .then(dbTrip => {
                res.json(dbTrip);
            })
            .catch(err => console.error(err));
    }, // END FIND ONE

    updateTrip: (req, res) => {
        db.Trip.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(dbTrip => {
                res.json(dbTrip);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteTrip: (req, res) => {
        db
            .Trip
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbTrip => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE
    
}; // END EXPORT
