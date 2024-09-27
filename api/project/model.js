const db = require('../../data/dbConfig');

function add(project) {
  return db('projects')
    .insert(project)
    .then(([id]) => findById(id));
}

function find() {
  return db('projects').then(projects =>
    projects.map(project => ({
      ...project,
      project_completed: project.project_completed ? true : false
    }))
  );
}

function findById(id) {
  return db('projects')
    .where({ project_id: id })
    .first()
    .then(project => ({
      ...project,
      project_completed: project.project_completed ? true : false
    }));
}

module.exports = {
  add,
  find,
  findById
};



// build your `Project` model here
