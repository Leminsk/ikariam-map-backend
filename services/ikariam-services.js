const config = require('../config');
const axios = require('axios');

async function requestMapData() {
    // inclusive ranges
    const x_min = 1;
    const x_max = 100;
    const y_min = 1;
    const y_max = 100;

    // this is so stupid, but we don't get the data with a separate payload/body
    const url = `${config.ikariam.server}/?action=WorldMap&function=getJSONArea&x_min=${x_min}&x_max=${x_max}&y_min=${y_min}&y_max=${y_max}`
    const res = await axios.post(url, {}, { headers: config.headers });
    const mapData = res.data.data

    return mapData;
}

module.exports = {
    requestMapData
}