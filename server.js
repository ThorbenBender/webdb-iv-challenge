const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile').development;
const db = knex(knexConfig);

const server = express();

server.get('/api/dishes', async (req, res) => {
	try {
		dishes = await db.raw('select * from dishes');
		if (dishes) {
			res.status(200).json(dishes);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error getting the data from the server' });
	}
});

module.exports = server;
