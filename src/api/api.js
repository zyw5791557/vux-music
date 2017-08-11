const express = require('express');
const router = express.Router();

// 推荐歌单
const gridList = require('../mock/gridlist.json');
// 独家放送
const exclusiveList = require('../mock/exclusiveList.json');
// 最新音乐
const latestList = require('../mock/latestList.json');
// 推荐MV
const recommendMV = require('../mock/recommendMV.json');

// recommendList
router.get('/gridList', (req, res) => {
    res.send(gridList);
});

// exclusiveList
router.get('/exclusiveList', (req, res) => {
    res.send(exclusiveList);
});

// latestList
router.get('/latestList', (req, res) => {
    res.send(latestList);
});

// recommendMV
router.get('/recommendMV', (req, res) => {
    res.send(recommendMV);
});

module.exports = router;