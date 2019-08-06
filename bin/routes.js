const express = require("express");
const app = express();
const { controller } = require("./Controller");
const bodyParser = require("body-parser");

app.get("/", (req, res)=>{
  res.send("Bienvenido a bases de datos");
});

app.get("/users", (req, res) => {

  controller.getUsers(res);
}),

app.get("/User/:id", (req,res) => {
let id = req.params.id;
controller.getUser(res, id);
}),

app.get("/Productos", (req, res) => {
  controller.getProductos(res);
}),

app.get("/Posts", (req, res) => {

  controller.getPosts(res);
}),

app.get("/posts/:id", (req,res) => {
let id = req.params.id;
controller.getpostsid(res, id);
})


exports.app = app;