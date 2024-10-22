import timestamps from "mongoo/lib/plugins/timestamps.js";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    // add more data
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// product model
const Product = mongoose.model("Product", productSchema);

export default Product;
