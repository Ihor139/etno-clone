import mongoose from "mongoose";
import {NavigationItem} from "../types";

const NavigationShema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    dataImage: {
      type: String,
      required: true
    },
    submenu: {
      type: Array,
      default: [],
      nested: {
        id: {
          type: Number,
          required: true,
        },
        dataImage: {
          type: String,
          required: true
        },
        title: {
          type: String,
          required: true
        },
        link: {
          type: String,
          required: true
        },
      },
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model<NavigationItem & mongoose.Document>("Navigation", NavigationShema);
