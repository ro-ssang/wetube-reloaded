import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 80,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minLength: 20,
  },
  hashtags: [{ type: String }],
  meta: {
    views: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

videoSchema.pre("save", async function () {
  this.hashtags = this.hashtags[0]
    .split(",")
    .map((word) => (word.trim()[0] === "#" ? word.trim() : "#" + word.trim()));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
