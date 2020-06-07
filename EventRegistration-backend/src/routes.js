const express = require("express");

//Event routes
const eventController = require("./controllers/EventController");
const userController = require("./controllers/UserController");
const registrationController = require("./controllers/RegistrationController");

const routes = express.Router();

routes.get("/st", (req, res) => {
  res.send({ message: "hello" });
});

//create event
routes.post("/event/create", eventController.createEvent);
routes.get("/event", eventController.getEvents);

routes.post("/user/register", userController.createUser);
routes.get("/user/:id", userController.getUserById);

routes.post("/registartion", registrationController.createRegistration);
module.exports = routes;
