

const Services = {
  //Journal Entries
  getAllJournalEntries(knex) {
    return knex.select('*').from('journal_entry');
  },
  
  addNewJournalEntry(knex, newEntry){
    return knex
      .insert(newEntry)
      .into('journal_entry')
      .returning('*');
  },


  // Daily Activity Log
  getAllLogEntries(knex) {
    return knex.select('*').from('daily_activities');
  },

  addNewLogEntry(knex, newEntry){
    return knex
      .insert(newEntry)
      .into('daily_activities')
      .returning('*');
  },

};



module.exports = Services;