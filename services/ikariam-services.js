const config = require('../config');
const axios = require('axios');

async function fooGet(bar) {
    console.log('get bar:', bar)
}

async function fooPost(bar) {
    console.log('post bar:', bar)
}

async function requestMapData() {
    console.log('requestMapData')
    const { data } = await axios.post(config.ikariam.server, 
        {
            action: 'WorldMap',
            function: 'getJSONArea',
            // inclusive ranges
            x_min: 1,
            x_max: 100,
            y_min: 1,
            y_max: 100
        }, 
        { headers: config.headers });

    console.log('requestMapData:', data)
    return data;
}

module.exports = {
    fooGet,
    fooPost,
    requestMapData
}