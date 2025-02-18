const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// aQKrnju9BMu6Fiwu;

const PORT = 3000;

app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://johntapang18:aQKrnju9BMu6Fiwu@cluster0.5kcsc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection data failed");
  });
