const User = require('../models').users
const jwt = require('jsonwebtoken')

exports.loginUser = async (req, res) => {
    const { username, password } = req.body
    let user = await User.findOne({
        where: {
            username: username,
            password: password
        }
    })

    if (!user) {
        return res.status(403).json({
            error: true,
            success: false,
            errors: [
                'Incorrect username or password!'
            ],
            statusCode: 403
        })
    }

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
            userId: user.id
        },
        statusCode: 200
    })
}