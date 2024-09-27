const db = require('../../data/dbConfig');

function add(task) {
    return db('tasks')
        .insert(task)
        .then(([id]) => findById(id));
    }

    function find() {
        return db('tasks as t')
          .join('projects as p', 't.project_id', 'p.project_id')
          .select('t.*', 'p.project_name', 'p.project_description')
          .then(tasks =>
            tasks.map(task => ({
              ...task,
              task_completed: Boolean(task.task_completed)
            }))
          );
      }
      

function findById(id) {
    return db('tasks')
        .where({ task_id: id })
        .first()
        .then(task => ({
            ...task,
            task_completed: Boolean(task.task_completed)
        }));
}

module.exports = {
    add,
    find,
    findById
    };



// build your `Task` model here
