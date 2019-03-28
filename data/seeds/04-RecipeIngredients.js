exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipe_ingredients').del().then(function() {
		// Inserts seed entries
		return knex('recipe_ingredients').insert([
			{ recipe_id: 1, ingredient_id: 1, Quantity: 200 },
			{ recipe_id: 1, ingredient_id: 2, Quantity: 100 },
			{ recipe_id: 1, ingredient_id: 3, Quantity: 100 }
		]);
	});
};
