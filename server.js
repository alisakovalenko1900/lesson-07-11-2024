const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const placesRoutes = require("./routes/places-routes");
app.use(bodyParser.json())
app.use("/api/components", placesRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5050);
//MVC