import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    image: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
