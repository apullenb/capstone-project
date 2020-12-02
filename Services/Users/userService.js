const bcrypt = require('bcrypt');

const Services= {

  getAllUsers(knex) {
    return knex.select('*').from('users');
  },

  checkForUser(knex, username) {
    return knex
      .from('users')
      .select('*')
      .where('username', username)
      .first();
  },
  
  insertUser(knex, username, password) {
    return knex
      .insert({username, password})
      .into('users')
      .returning('*')
      .then(rows => {
        return rows;
      });
  },
  getById(knex, id) {
    return knex
      .select('*')
      .from('users')
      .where('user_id', id)
      .first();
  },

  getUserWithUserName(db, username) {
    return db('users')
      .where({ username })
      .first();
  },
  comparePasswords(password, hash) {
    return bcrypt.compare(password, hash);
  },

  getUserDash(knex, id) {
    return knex
      .select('username')
      .from('users')
      .where('user_id', id)
      .first();
  }
};
module.exports = Services;