const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = process.env.PORT || 4000; // 'port' should be uppercase
const db = require('./config/key'); // Make sure this is correctly configured
const passport = require("passport");
const session = require('express-session');

// EJS 
app.use(expressLayouts);
app.set('view engine' , 'ejs');

// Bodyparser
app.use(express.urlencoded({extended:false}))

// Set up express-session middleware
app.use(session({
  secret: 'your-secret-key', // Change this to a strong secret
  resave: true,
  saveUninitialized: true
}));
// passport middleware 
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
// Routes 
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users.js"));
app.get("/", (req, res) => {
  res.send("hello i am working fine");
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
