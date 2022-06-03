const User = require('../models').users
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.loginUser = async (req, res) => {
    const { username, password } = req.body
    let user = await User.findOne({
        where: {
            username: username,
            // password: password
        }
    })

    if (!user) {
        return res.json({
            error: true,
            success: false,
            errors: [
                'Incorrect username or password!'
            ],
            statusCode: 401
        })
    }

    if (user && user.status === false) {
        return res.json({
            error: true,
            success: false,
            errors: [
                'Suspended User!'
            ],
            statusCode: 401
        })
    }

    bcrypt.compare(password, user.password, (err, response) => {
        if (err) {
            return res.status(500).json({
                error: true,
                success: false,
                errors: [
                    'Internal Server Error'
                ],
                statusCode: 403
            })
        }

        if (response === true) {

            const token = jwt.sign(
                { id: user.id, username: username, },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "7d",
                }
            );

            res.status(200).json({
                error: false,
                success: true,
                body: {
                    token: token,
                    userId: user.id,
                    type: user.role,
                    username
                },
                statusCode: 200
            })

        }
        else {
            console.log('Here 1')
            res.json({
                error: true,
                success: false,
                errors: [
                    'Incorrect username or password!'
                ],
                statusCode: 401
            })
        }
    })




}