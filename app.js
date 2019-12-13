
require("dotenv").config();

const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('sequelize')
const logger = require('morgan')

// CONTROLLERS
const authCtrl = require('./app_api/controllers/auth/authCtrl')
//DB
const models = require('./app_api/models')

const PORT = process.env.PORT || 3001
// ENVIRONMENT
const isDev = process.env.NODE_ENV === 'development'
// ROUTES
const routes = require('./app_api/routes/indexRoutes')

const app = express()

const tripData = require("./app_api/data/trip")
const locationData = require("./app_api/data/location")
const trailData = require("./app_api/data/trail")
const campData = require("./app_api/data/campsite")
const activityData = require("./app_api/data/activity")
const centerData = require("./app_api/data/visitorCenter");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(logger('dev'));
app.use(routes);
if (isDev) {
    app.use(express.static('app_client/public'));
}
app.use(express.static('app_client/build'));


models.sequelize.sync({ force: isDev }).then(function () {
    const saltArr = [
        authCtrl._generateSalt(), 
        authCtrl._generateSalt(), 
        authCtrl._generateSalt(), 
        authCtrl._generateSalt()
    ];

    if (isDev) {
        models.User.bulkCreate([
            {
                email: "josh@spears.com",
                salt: saltArr[0],
                hash: authCtrl._generateHash("joshspears", saltArr[0])
            },
            {
                email: "jason@daniel.com",
                salt: saltArr[1],
                hash: authCtrl._generateHash("jasondaniel", saltArr[1])
            },
            {
                email: "melodie@chi.com",
                salt: saltArr[2],
                hash: authCtrl._generateHash("melodiechi", saltArr[2])
            },
            {
                email: "rey@adam.com",
                salt: saltArr[3],
                hash: authCtrl._generateHash("reyadamcruz", saltArr[3])
            }
        ])
    } // END IF 

    app.listen(PORT, () => console.log(`\nApp listening on PORT: ${PORT}`)); // END LISTEN
});