const User = require("../models/User");

module.exports = {
  async createUser(req, res) {
    try {
      const { name, email, mobileNo, idcard } = req.body;
      // const { } = req.file
      const existenceuser = await User.findOne({ email });

      if (!existenceuser) {
        const user = await User.create({
          name,
          email,
          mobileNo,
          idcard,
        });

        return res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          mobileNo: user.mobileNo,
          idcard: user.idcard,
        });
      }
      return res.status(400).json({
        message: "email already exist with same event",
      });
    } catch (error) {
      throw new Error(`Error while creating new user: ${error}`);
    }
  },
  async getUserById(req, res) {
    const { user_id } = req.params;
    try {
      const user = await User.find({ userId });

      if (user) {
        return res.json(user);
      }
    } catch (error) {
      return res.status(400).json({ message: "No user " });
    }
  },
};
