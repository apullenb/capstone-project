


const foodServices = {

  addNewFoodEntry(knex, newEntry){
    return knex
      .insert(newEntry)
      .into('food')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  getById(knex, id) {
    return knex
      .from('food')
      .select('*')
      .where('user_id', id);
  },

};



module.exports = foodServices;
