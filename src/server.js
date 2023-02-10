const express = require('express')
const mongoose = require('mongoose')
const bookingRouter = require('./backend/routes/bookingRoutes')
const facilityRouter = require('./backend/routes/amentityRoutes')
const eventRouter = require('./backend/routes/eventRoutes')
const adminsRouter = require("./backend/routes/admins");
const msgRouter = require("./backend/routes/messageRoutes")
const parkRouter = require("./backend/routes/parkRoutes")
const postRoutes = require("./backend/routes/postRoutes")
const usersRouter = require("./backend/routes/users");
const ticketRouter = require("./backend/routes/ticketRoutes")
const cors = require('cors')

const Port = process.env.PORT || 3035

const app = express()
app.use(express.json())

app.use('./routes/bookingRoutes',bookingRouter)
app.use('./routes/amentityRoutes',facilityRouter)
app.use('./routes/eventRoutes',eventRouter)
//app.use('/', adminsRouter);
app.use('./routes/parkRoutes', parkRouter)
app.use('./routes/messageRoutes', msgRouter)
app.use('./routes/postRoutes', postRoutes)
// app.use("/client",clientsRouter)
app.use("/routes/user", usersRouter);
app.use("./routes/ticketRoutes",ticketRouter)
app.use(cors())

mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://capstone:Capstone2023@cluster0.vaju5po.mongodb.net/webapp?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Park & Recreation App</h1>");
});


app.listen(Port, () => {
    console.log(`Server is listening on port http://localhost:${Port}`);
});