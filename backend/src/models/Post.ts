import mongoose from "mongoose";
import {Post} from "../types";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
      unique: true,
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    imageUrl: String
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Post & mongoose.Document>("Post", PostSchema);
