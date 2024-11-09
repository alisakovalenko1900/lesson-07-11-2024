const express = require("express"); 
const {Pool} = require('pg');
const bodyParser = require("body-parser");
const app = express();

const pool = new Pool({
	// user: 'database_07_11_user',
	// host: 'dpg-csmggadumphs73ahfbs0-a.oregon-postgres.render.com',
	// database: 'database_07_11',
	// password: 'foq6GujAa5Kh9OGwgEeb0xX7rJcZaDfO',
  connectionString: 'postgresql://database_07_11_user:foq6GujAa5Kh9OGwgEeb0xX7rJcZaDfO@dpg-csmggadumphs73ahfbs0-a.oregon-postgres.render.com/database_07_11'
	// port: 5432
});

app.use(bodyParser.json());

app.get("/test", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
		res.json(result.rows);
  }
    catch (err){
      console.log(err)
    }
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
