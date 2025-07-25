const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "frontend")));
app.use("/admin", express.static(path.join(__dirname, "frontend")));

app.use("/", require("./routes/root"));
app.use("/admin", require("./routes/admin"));

app.all("/{*splat}", (req, res) => {
  if (req.accepts("html")) {
    res.status(404).sendFile(path.join(__dirname, "frontend", "404.html"));
  } else if (req.accepts("json")) {
    res.status(404).json({ "message": "JSON specific resource can't be found" })
  }
})

app.use((err, req, res, next) => {
  if (err) {
    res.sendStatus(500);
    console.log(`${err.name} : ${err.message}`)
  }

})
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
})
