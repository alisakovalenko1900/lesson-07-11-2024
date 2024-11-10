const db = require('../db/index');

const getAllUsers = async (req, res) => {
	try {
		const result = await db.query('SELECT * FROM public."Users"');
		res.json(result.rows);
	} catch (err) {
		console.log(err);
	}
};

const getUserById = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await db.query(
			`SELECT * FROM public."Users" WHERE id = ${id}`
		);
		res.json(result.rows);
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getAllUsers,
	getUserById,
};
