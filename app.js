const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 80;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
const DB = "mongodb://127.0.0.1:27017/ECOMMERCE";
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("CONNECTION ESTABLISHED TO DATABASE");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });

// Mongoose schema for login data
const LoginSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  number: String,
  dob: String,
});
//database in mongodb
const Login = mongoose.model("Login", LoginSchema);

// GET request handler for the login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// GET request handler for the signup page
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// POST request handler for login
app.post("/", (req, res) => {
  const { email, password } = req.body;

  Login.findOne({ email, password })
    .then((login) => {
      if (login) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Invalid credentials, try again" });
      }
    })
    .catch((error) => {
      console.log("Error accessing the database:", error);
      res
        .status(500)
        .json({ error: "An error occurred while accessing the database" });
    });
});

// POST request handler for signup
app.post("/signup", (req, res) => {
  const { name, email, password, dob, number } = req.body;

  const userData = new Login({
    name,
    email,
    password,
    number,
    dob,
  });

  userData
    .save()
    .then(() => {
      console.log(`User data saved to the databae:::::::::::WELCOME ${name} your email is ${email} and your number is${number}
      `);
      res.status(200).json({ message: "Signup successful" });
    })
    .catch((error) => {
      console.log("Error saving user data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while saving the user data" });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
