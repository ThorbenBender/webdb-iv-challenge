const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile').development;
const db = knex(knexConfig);

const server = express();

server.use(express.json());

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

server.post('/api/dishes', async (req, res) => {
	try {
		dish = await db('dishes').insert(req.body);
		if (dish) {
			res.status(201).json(dish);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error at adding the data' });
	}
});

server.get('/api/dishes/:id', async (req, res) => {
	try {
		dish = await db('dishes').where({ dish_id: req.params.id });
		if (dish) {
			res.status(200).json(dish);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error at getting the data' });
	}
});

server.get('/api/dishes/:id/recipes', async (req, res) => {
	try {
		recipes = await db.from('dishes').innerJoin('recipes', 'dishes.dish_id', 'recipes.dish_id');
		if (recipes) {
			res.status(200).json(recipes);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error getting the data' });
	}
});

server.post('/api/recipes', async (req, res) => {
	try {
		recipe = await db('recipes').insert(req.body);
		if (recipe) {
			res.status(201).json(recipe);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Error adding recipe' });
	}
});

module.exports = server;
