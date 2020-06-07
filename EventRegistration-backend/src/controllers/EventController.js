const Event = require("../models/Event");

module.exports = {
  async createEvent(req, res) {
    try {
      const { title, description, date, venue } = req.body;

      const existenceEvent = await Event.findOne({ title });

      if (!existenceEvent) {
        const event = await Event.create({
          title,
          description,
          date,
          venue,
        });

        return res.json({
          _id: event._id,
          title: event.title,
          description: event.description,
          venue: event.venue,
        });
      }
      return res.status(400).json({
        message: "event already exist with same title",
      });
    } catch (error) {
      throw new Error(`Error while creating new event: ${error}`);
    }
  },
  async getEvents(req, res) {
    try {
        const event = await Event.find({});

        if(event){
            return res.json(event);
        }
    }catch(error){
        return res.status(400).json({ message:"No events "})
    }
  },
};
