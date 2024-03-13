const express = require('express');
const router = express.Router();
const ikariamServices = require('../services/ikariam-services');

router.get('/', async function(req, res, next) {
    try {
        res.json(await ikariamServices.requestMapData());
    } catch (err) {
        console.error(`Error while requesting map data `, err.message);
        next(err);
    }
});

module.exports = router;