

const Services = {
  //Journal Entries
  getAllEntries(knex) {
    return knex.select('*').from('journal_entry');
  },
  
  addNewEntry(knex, newEntry){
    return knex
      .insert(newEntry)
      .into('journal_entry')
      .returning('*');
  },

};
module.exports = Services;