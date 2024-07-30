
const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

// const userrRoutes = require('../backend/routes/user');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe')
const cors = require("cors");

const dotenv = require('dotenv')
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Bazzar').
    then(() => console.log('DB connection successfull!')).catch((err) => { console.log(err) });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/create-checkout-session", stripeRoute)


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});