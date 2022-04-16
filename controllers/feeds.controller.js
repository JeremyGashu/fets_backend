//All controller functions


const Feed = require('../models').feed;
const {validationResult} = require('express-validator');
module.exports = {
    getAllFeeds: async (req, res) => {

        Feed.findAll().then(feeds => {
            res.status(200).json({
                error: false,
                success: true,
                body: feeds,
                statusCode: 200
            })
        }).catch(err => {
            res.status(500).json({
                error: true,
                success: false,
                errors: [
                    "Internal server error",
                    err
                ],
                statusCode: 500
            })
        })

    },
    getFeedById: async (req, res) => {

        const {id} = req.params;

        Feed.findByPk(id).then(feed => {
            if (!feed) {
                res.status(422).json({
                    error: true,
                    success: false,
                    errors: [
                        "Feed can not found with this id"
                    ],
                    statusCode: 422
                })
            }

            res.status(200).json({
                error: false,
                success: true,
                body: feed,
                statusCode: 200
            })
        }).catch(err => {
            res.status(500).json({
                error: true,
                success: false,
                errors: [
                    "Internal server error",
                    err
                ],
                statusCode: 500
            })
        })

    },
    createFeed: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({
                error: true,
                success: false,
                errors: errors.array().map(err => err.msg),
                statusCode: 422
            })
        }

        const {title, description, metadata, image} = req.body;

        Feed.create({title, description, metadata, image}).then(feed => {
            res.status(201).json({
                error: false,
                success: true,
                body: feed,
                statusCode: 201
            })
        }).catch(err => {
            res.status(500).json({
                error: true,
                success: false,
                errors: [
                    "Internal server error",
                    err
                ],
                statusCode: 500
            })
        })
    },

    deleteFeed: async (req, res) => {

        const {id} = req.params;

        Feed.destroy({
            where: {id}
        }).then(feed => {
            if (!feed) {
                res.status(422).json({
                    error: true,
                    success: false,
                    errors: [
                        "Could not found feed with this id"
                    ],
                    statusCode: 422
                })
            }
            res.status(200).json({
                error: false,
                success: true,
                statusCode: 200
            })
        }).catch(err => {
            res.status(500).json({
                error: true,
                success: false,
                errors: [
                    "Internal server error",
                    err
                ],
                statusCode: 500
            })
        })

    },
    updateFeed: async (req, res) => {
        const {id} = req.params;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({
                error: true,
                success: false,
                errors: errors.array().map(err => err.msg),
                statusCode: 422
            })
        }

        let selectedFeed = await Feed.findByPk(id)
        if (!selectedFeed) {
            res.status(422).json({
                error: true,
                success: false,
                errors: [
                    "Could not find feed with this id"
                ],
                statusCode: 422
            })
        }

        const {title, description, metadata, image} = req.body;

        selectedFeed.update(
            {
                description: description || selectedFeed.description,
                title: title || selectedFeed.title,
                metadata: metadata || selectedFeed.metadata,
                image: image || selectedFeed.imageOrientation
            }
        ).then(feed => {
            res.status(200).json({
                error: false,
                success: true,
                body: feed,
                statusCode: 200
            })
        }).catch(err => {
            res.status(500).json({
                error: true,
                success: false,
                errors: [
                    "Internal server error",
                    err
                ],
                statusCode: 500
            })
        })


    }
}