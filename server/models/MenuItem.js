import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  price: { type: String, default: "MP" },
  image: { type: String, default: "" },
  category: { type: String, required: true },
  section: { type: String, required: true },
  badge: { type: String, default: "" },
  order: { type: Number, default: 0 }
});

export default mongoose.model("MenuItem", menuItemSchema);
