const express = require('express')
const multer = require('multer')
const { uuid } = require('uuidv4')
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
        cb(null, `${uuid()}.${file.mimetype.split('/')[1]}`)
    }
})

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
}
)

router.post('/', upload.single('image'), (req, res) => {
    console.log(`http://localhost:5000/${req.file.path}`)
    res.status(200).json(
        {
            success: 1,
            file: {
                url: `http://localhost:5000/${req.file.path}`,
            }
        }
    )
})

module.exports = router