exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipe_ingredients', (table) => {
		table.integer('recipe_id').references('recipe_id').inTable('recipes');
		table.integer('ingredient_id').references('ingredient_id').inTable('ingredients');
		table.integer('Quantity');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipe_ingredients');
};
