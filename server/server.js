const express = require('express');
const bodyParser = require('body-parser');
const routes = require('.');

const app = express();
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
