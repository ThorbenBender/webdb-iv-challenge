exports.up = function(knex, Promise) {
	return knex.schema.createTable('dishes', (table) => {
		table.increments('dish_id');

		table.string('dish_Name', 128).notNullable().unique();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dishes');
};
