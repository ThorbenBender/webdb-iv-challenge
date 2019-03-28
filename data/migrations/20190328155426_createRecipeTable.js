exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipes', (table) => {
		table.increments('recipe_id');
		table.string('recipe_name', 128).notNullable().unique();
		table.integer('dish_id').references('dish_id').inTable('dishes');
		table.string('recipe_description', 128).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipes');
};
