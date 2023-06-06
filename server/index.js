const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const app = express();
const productRouter = require("./routes/productRouter");

const Order = require("./models/orderModel");

var corsOptions = {
  origin: "http://localhost:5173",
};

const calculateTotalPrice = (orderItems) => {
  return orderItems.reduce(
    (total, curValue) => total + curValue.price * curValue.amount,
    0
  );
};

const calculateTotalAmount = (orderItems) => {
  return orderItems.reduce((total, item) => total + item.amount, 0);
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Food Ordering" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/", productRouter);

app.post("/create-order", async (req, res) => {
  try {
    const { orderItems, shippingInfo } = req.body;

    const totalPrice = calculateTotalPrice(orderItems);
    console.log("TotalPrice: ", totalPrice);
    const totalAmount = calculateTotalAmount(orderItems);

    const order = new Order({
      shippingInfo,
      orderItems,
      totalPrice,
      totalAmount,
    });

    await order.save();

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (e) {
    res.status(400).json({
      error: {
        message: e.message,
      },
    });
  }
});
