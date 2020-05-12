const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
console.log("hi");

const app = express();
app.use(express.static(path.join(__dirname, "..", "material_ui_react", "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "material_ui_react", "build", "index.html"));
});
// }

module.exports = app;