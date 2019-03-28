exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients').del().then(function() {
		// Inserts seed entries
		return knex('ingredients').insert([
			{ ingredient_id: 1, ingredient_name: 'Mozzarella' },
			{ ingredient_id: 2, ingredient_name: 'Salami' },
			{ ingredient_id: 3, ingredient_name: 'Flour' }
		]);
	});
};
