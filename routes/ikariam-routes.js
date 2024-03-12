const express = require('express');
const router = express.Router();
const ikariamServices = require('../services/ikariam-services');

// router.get('/', async function(req, res, next) {
//     try {
//         res.json(await ikariamServices.fooGet(req.query));
//     } catch (err) {
//         console.error(`Error while getting ikariam services `, err.message);
//         next(err);
//     }
// });

// router.post('/', async function(req, res, next) {
//     try {
//         res.join(await ikariamServices.fooPost(req.body));
//     } catch {
//         console.error(`Error while posting ikariam services `, err.message);
//         next(err);
//     }
// });

router.get('/', async function(req, res, next) {
    try {
        res.json(await ikariamServices.requestMapData());
    } catch (err) {
        console.error(`Error while requesting map data `, err.message);
        next(err);
    }
});

module.exports = router;