const Feed = require('../models').feed

exports.getAllFeeds = async (req, res) => {
    Feed.findAll().then(val => {
        res.status(200).json({
            error: false,
            success: true,
            body: val,
            statusCoRde: 200
        })
    }).catch(err => {
        res.status.json({
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
            company: val,
            statusCode: 200
        })
    }).catch(err => {
        res.status.json({
            error: true,
            success: false,
            errors: [
                'Internal Server Error!',
            ],
            statusCode: 500

        })
    })

}