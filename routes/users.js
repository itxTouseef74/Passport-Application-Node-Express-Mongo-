const express = require("express");
const router = express.Router();
const bcrypt=require('bcryptjs');
const passport=require('passport')

// user modle
const User = require("../models/Users");

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // ... (validation checks and error handling)

  if (errors.length > 0) {
    // ... (rendering errors if present)
  } else {
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          // User exists, render errors
        } else {
          const newUser = new User({
            name,
            email,
            password,
          });

          bcrypt.genSalt(10)
            .then((salt) => bcrypt.hash(newUser.password, salt))
            .then((hash) => {
              newUser.password = hash;
              return newUser.save(); // Save user after hashing password
            })
            .then(() => {
              console.log("User saved successfully");
              res.redirect("/users/login"); // Redirect to login page
            })
            .catch((err) => {
              console.error("Error saving user:", err);
              // Render error page
            });
        }
      })
      .catch((err) => {
        console.error("Error finding user:", err);
        // Render error page
      });
  }
});

// Login handle 
router.post('/login',(req,res,next)=>{
passport.authenticate('local',{
  successRedirect:'/dashboard',
failureRedirect:'/users/login', 
 
})(req,res,next);
})
module.exports = router;
