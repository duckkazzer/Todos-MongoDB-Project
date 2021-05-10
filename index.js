const express = require("express");
const path = require(`path`);
const mongoose = require("mongoose");
require(`dotenv/config`);
const expressHB = require(`express-handlebars`);
const app = express();
const hbs = expressHB.create({
  defaultLayout: "main",
  extname: "hbs",
});
const todoRoutes = require("./routes/todos");

app.engine(`hbs`, hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(todoRoutes);

async function start() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(3000, () => {
      console.log(`Server started on port 3000`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
