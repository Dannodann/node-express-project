// const express = require("express");
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";



const app = express();

// Database
db.authenticate()
  .then(() => console.log("Database conected"))
  .catch((error) => console.log(error));

const port = process.env.port || 4000;

//Enabling pug
app.set("view engine", "pug");

//Middleware
app.use((req, res, next) => {
  const year = new Date();

  res.locals.actualYear = year.getFullYear();
  res.locals.siteName = "Travel Agency";
  next();
});

//Adding boy.parser so we can reed the form
app.use(express.urlencoded({extended: true}))


//Adding router
app.use("/", router);

//Enabling public folder
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
