const router = require('express').Router();
const {getAllFeeds, getFeedById, createFeed, deleteFeed, updateFeed} = require('../controllers/feeds.controller');
const {
    feedDescriptionCannotBeEmpty,
    feedImageCannotBeEmpty,
    feedMetadataCannotBeEmpty,
    feedTitleCannotBeEmpty
} = require('../errors/feed.errors');


router.get('/', getAllFeeds);
router.get('/:id', getFeedById);
router.delete('/:id', deleteFeed);
router.patch('/:id', updateFeed);
router.post('/', feedTitleCannotBeEmpty, feedDescriptionCannotBeEmpty, feedMetadataCannotBeEmpty, feedImageCannotBeEmpty, createFeed);

module.exports = router;