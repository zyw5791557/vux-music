const express = require('express');
const router = express.Router();

const gridList = require('../mock/gridlist.json');

router.get('/gridList', (req, res) => {
    res.send(gridList);
});

module.exports = router;