const hbs = require("express-handlebars");
const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");

// app.use(express.static(path.join(__dirname, "public")));
//app.use(morgan("combined"));
//Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
