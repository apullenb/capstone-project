

const ActServices = {

  // Daily Activity Entries
  getAllLogEntries(knex) {
    return knex.select('*').from('daily_activities');
  },

  addNewActEntry(knex, newEntry){
    return knex
      .insert(newEntry)
      .into('daily_activities')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex
      .from('daily_activities')
      .select('*')
      .where('user_id', id);
  },

};

module.exports = ActServices;