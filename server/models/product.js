import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {type: String, trim: true, required: "Name is required"},
    description: { type: String, trim: true },
    image: {data: Buffer, contentType: String},
    category: String,
    quantity: { type: Number, required: "Quantity is required"},
    price: {type: Number, required: "Price is required"},
    seller: {type: mongoose.Schema.ObjectId, ref: 'User'}
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
