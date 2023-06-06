const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    shippingInfo: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    orderItems: [
      {
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        imageUrl: { type: String, required: true },
        price: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
