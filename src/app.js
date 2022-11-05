const hbs = require("express-handlebars");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");

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

app.post("/calculator", function (req, res) {
  res.render('other');
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
