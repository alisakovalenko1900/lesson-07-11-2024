const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(cors({
origin: 'http://localhost:5173',
  }));

app.use(bodyParser.json());

app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}
	res.status(error.code || 500);
	res.json({ message: error.message || 'Произошла ошибка' });
});

app.use('/api', routes);

app.listen(5050, () => {
	console.log('Server is running on port 5050');
});
