const Registration = require("../models/Registration");

module.exports = {
  async createRegistration(req, res) {
    const { registrationType, tickets, user_id, event } = req.body;

    const date = Date.now();
    //making registartion number
    const dt = date.toString().substr(0, 6);

    const registNum = dt+Math.floor(Math.random() * 100)

    const registration = await Registration.create({
      date,
      tickets,
      registrationType,
      registrationNumber: registNum,
      user: user_id,
      event: event,
    });
    await registration.populate("event").populate("user").execPopulate();

    return res.json(registration.registrationNumber);
  },
};
