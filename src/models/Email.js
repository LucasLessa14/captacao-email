const knex = require('./../database');

module.exports = {
    async findAll() {
        try {
            const results = await knex.select().table('email');
            return results;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    async new(email, name) {
        try {
            await knex.insert({ email, name }).table('email');
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
}