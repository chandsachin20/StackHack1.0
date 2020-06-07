const Event = require("../models/Event");
const User = require("../models/User");

module.exports = {
async getEventById(req, res) {
    const { eventId } = req.params;
    try {
      const event = await Event.findById("eventId");

      if (event) {
        return res.json(event);
      }
    } catch (error) {
      return res.status(400).json({ message: "EventId does not exist" });
    }
  },
}