import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  urlId: {
    type: String,
    required: true,
  },
  origUrl: {
    type: String,
    required: true,
    maxLength: 2048,
  },
  shortUrl: {
    type: String,
    required: true,
    expires: "24h",
    maxLength: 22,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

export default module.exports = mongoose.model("Url", urlSchema);
