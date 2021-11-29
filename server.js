const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./src/config/db");
const dotenv = require("dotenv");
const cors = require('cors')

const authRoutes = require("./src/routes/authRoute")
const userRoutes = require("./src/routes/userRoute")

dotenv.config();
connectDB();
console.log(process.env.MONGODBURI);

app.use(express.json());
app.use(cors())

app.use("/user", userRoutes )
app.use("/auth", authRoutes );
app.use("/", (req, res, next) => {
  res.json({ message: "page not found" });
});


app.listen(port);
