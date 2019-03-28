exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipes').del().then(function() {
		// Inserts seed entries
		return knex('recipes').insert([
			{ recipe_id: 1, recipe_name: 'Pizza Diavolo', dish_id: 1, recipe_description: 'Call the pizza service' },
			{ recipe_id: 2, recipe_name: 'Pizza Special', dish_id: 1, recipe_description: 'Order a pizza online' },
			{ recipe_id: 3, recipe_name: 'Pizza Polo', dish_id: 1, recipe_description: 'Order a pizza on the uber foods app' }
		]);
	});
};
