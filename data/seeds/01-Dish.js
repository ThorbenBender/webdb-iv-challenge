exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('dishes').del().then(function() {
		// Inserts seed entries
		return knex('dishes').insert([
			{ dish_id: 1, dish_Name: 'Pizza' },
			{ dish_id: 2, dish_Name: 'Salad' },
			{ dish_id: 3, dish_Name: 'Taco' }
		]);
	});
};
