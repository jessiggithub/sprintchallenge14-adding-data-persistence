const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const resource = await Resource.add(req.body);
        res.status(201).json(resource);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create resource'});
    }
});

router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get resources'});
    }
 });

    module.exports = router;



// build your `/api/resources` router here
