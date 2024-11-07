const express = require("express"); 
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.json({ message: "Запрос GET выполнен успешно." });
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Произошла ошибка" });
});

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});
