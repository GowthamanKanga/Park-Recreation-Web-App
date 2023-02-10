const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bookingRouter = require("./routes/bookingRoutes");
const facilityRouter = require("./routes/amentityRoutes");
const eventRouter = require("./routes/eventRoutes");
const adminsRouter = require("./routes/admins");
const msgRouter = require("./routes/messageRoutes");
const parkRouter = require("./routes/parkRoutes");
const postRoutes = require("./routes/postRoutes");
const usersRouter = require("./routes/users");
const ticketRouter = require("./routes/ticketRoutes");


require("dotenv").config();



const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
const uri = process.env.ATLAS_URI;

app.use("/", bookingRouter);
app.use("/", facilityRouter);
app.use("/", eventRouter);
app.use("/", adminsRouter);
app.use("/", parkRouter);
app.use("/", msgRouter);
app.use("/", postRoutes);

app.use("/user", usersRouter);
app.use("/", ticketRouter);
// app.use("/client",clientsRouter)
app.use(cors());


mongoose.Promise = global.Promise;

mongoose.set('strictQuery', false);
mongoose.connect(uri)
  .then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Park & Recreation App</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
