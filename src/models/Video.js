import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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

const Video = mongoose.model("Video", videoSchema);

export default Video;
