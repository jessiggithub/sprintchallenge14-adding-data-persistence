const express = require('express');
const Task = require('./model');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const task = await Task.add(req.body);
      res.status(201).json({
        ...task,
        task_completed: Boolean(task.task_completed)
      });
    } catch (err) {
      res.status(500).json({ message: 'Failed to create task' });
    }
  });

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get tasks'});
    }
 });

module.exports = router;


// build your `/api/tasks` router here
