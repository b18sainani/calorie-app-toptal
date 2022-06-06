const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mealRoute = require('./routes/api/meal');
const passport = require("passport");
const usersRoute = require("./routes/api/users");
mongoose.Promise = global.Promise;
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
app.use(passport.initialize());
require("./config/passport")(passport);
app.use(cors());
app.use('/api/meal', mealRoute);
app.use("/api/users", usersRoute);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));