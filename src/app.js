const hbs = require("express-handlebars");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
app.use(bodyparser.urlencoded({ extended: true }));
//app.use(morgan("combined"));
//Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    //defaultLayout: "layouts",
    // layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", function (req, res) {
  let rs = 0;
  const x = parseFloat(req.body.x);
  const y = parseFloat(req.body.y);
  switch (req.body.op) {
    case "+":
      rs = x + y;
      break;
    case "-":
      rs = x - y;
      break;
    case "x":
      rs = x * y;
      break;
    case ":":
      rs = x / y;
      break;
  }
  res.render("home", {
    Result: rs,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
