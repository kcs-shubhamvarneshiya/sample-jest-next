import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Created_At: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

export default mongoose.models.Posts || mongoose.model("Posts", postSchema);
