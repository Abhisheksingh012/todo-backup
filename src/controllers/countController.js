const Count = require("../models/count");
const getCount =async (req, res) => {
    try {
      const countData = await Count.findOne({});
      if (!countData) {
        return res.status(404).json({ error: 'Count data not found' });
      }
      const totalCount = countData.postCount + countData.putCount;
      res.json({ totalCount });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  module.exports = {
    getCount
  };
