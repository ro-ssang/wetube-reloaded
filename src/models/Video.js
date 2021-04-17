import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
  createdAt: Date,
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
