import { model, Schema } from "mongoose";

const LinkSchema = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
    unique: true,
  },
  short_url: {
    type: String,
    unique: true,
  },
});

const Link = model("link", LinkSchema);

export default Link;
