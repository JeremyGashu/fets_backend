const { getAllFeeds, getFeedById, createFeed, deleteFeed } = require('../controllers/feeds.controller')
const express = require('express')
const multer = require('multer')
const { uuid } = require('uuidv4')
const { descriptionCannotBeEmpty, metadataCannotBeEmpty, titleCannotBeEmpty } = require('../errors/feed.error')
// const { loggedInAsTechnicalAdmin } = require('../middlewares')


const router = express.Router()

const fileFilter = (req, file, cb) => {
    if (['image/jpeg', 'image/JPEG', 'image/png', 'image/PNG'].includes(file.mimetype)) {
        cb(null, false)
    }
    else {
        cb(new Error('Improper file type sent!'), false)
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${uuid()}-${file.originalname}`)
    }
})

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
}
)

router.get('/', getAllFeeds)
router.get('/:id', getFeedById)
router.post('/', upload.single('feedImage'), descriptionCannotBeEmpty, metadataCannotBeEmpty, titleCannotBeEmpty, createFeed)
router.delete('/:id', deleteFeed)

module.exports = router