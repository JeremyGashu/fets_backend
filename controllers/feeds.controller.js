const Feed = require('../models').feed
const { validationResult } = require('express-validator')


exports.getAllFeeds = async (req, res) => {
    Feed.findAll().then(val => {
        res.status(200).json({
            error: false,
            success: true,
            body: val,
            statusCoRde: 200
        })
    }).catch(err => {
        res.json({
            error: true,
            success: false,
            errors: [
                'Internal Server Error!',
                err
            ],
            statusCode: 500

        })
    })
}

exports.getFeedById = async (req, res) => {

    const { id } = req.params
    Feed.findByPk(id).then(val => {
        if (!val) {
            return res.json({
                error: true,
                errors: [
                    'Feed cannot be found with this ID!',
                ],
                statusCode: 422

            })
        }
        res.status(200).json({
            error: false,
            success: true,
            feed: val,
            statusCode: 200
        })
    }).catch(err => {
        res.json({
            error: true,
            success: false,
            errors: [
                'Internal Server Error!',
            ],
            statusCode: 500

        })
    })

}



exports.createFeed = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: true, errors: errors.array().map(err => err.msg), statusCode: 422, });
    }

    console.log(req.body)
    if (!req.file) {
        return res.status(422).json({
            error: true,
            success: false,
            errors: [
                'Please upload cover image.',
            ],
            statusCode: 500

        })
    }
    const { description, title, metadata } = req.body


    Feed.create({ description, title, metadata, image: req.file.path }).then(val => {
        return res.status(200).json({
            error: false,
            success: true,
            body: val,
            statusCode: 200
        })
    }).catch(err => {
        res.json({
            error: true,
            success: false,
            errors: [
                'Internal Server Error!',
            ],
            statusCode: 500

        })
    })
}



exports.deleteFeed = async (req, res) => {
    const { id } = req.params
    Feed.destroy({
        where: {
            id
        }
    }).then(val => {
        if (!val) {
            return res.json({
                error: true,
                success: false,
                errors: [
                    'Feed cannot be found with this ID!',
                ],
                statusCode: 422

            })
        }
        res.status(200).json({
            error: false,
            success: true,
            statusCode: 200,
            success: true,

        })
    }).catch(err => {
        res.json({
            error: true,
            success: false,
            errors: [
                'Internal Server Error!',
            ],
            statusCode: 500

        })
    })
}