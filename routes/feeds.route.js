const { getAllFeeds, getFeedById } = require('../controllers/feeds.controller')
const express = require('express')
// const { loggedInAsTechnicalAdmin } = require('../middlewares')

const router = express.Router()

router.get('/', getAllFeeds)
router.get('/:id', getFeedById)

module.exports = router