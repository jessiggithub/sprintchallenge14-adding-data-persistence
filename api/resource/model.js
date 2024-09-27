const db = require('../../data/dbConfig');

function add(resource) {
  return db('resources')
    .insert(resource)
    .then(([id]) => findById(id));
}

function find() {
  return db('resources');
}

function findById(id) {
  return db('resources')
    .where({ resource_id: id })
    .first();
}

module.exports = {
    add,
    find,
    findById
    };


// build your `Resource` model here
