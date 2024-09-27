const express = require('express');
const Project = require('./model');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const project = await Project.add(req.body);
      res.status(201).json({
        ...project,
        project_completed: Boolean(project.project_completed)
      });
    } catch (err) {
      res.status(500).json({ message: 'Failed to create project' });
    }
  });

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get projects'});
    }
 });

 module.exports = router;



// build your `/api/projects` router here
