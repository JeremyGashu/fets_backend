const jwt = require('jsonwebtoken')
const roles = require('../config/roles')
const User = require('../models').users
require('dotenv').config()

exports.loggedInAsAdmin = async (req, res, next) => {
    const { authorization } = req.headers
    try {
        const token = authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        if (decoded) {
            const { id } = decoded
            let user = await User.findByPk(id)
            if (user && user.role == roles.ADMIN) {
                next()
            }
            else {
                return res.status(403).json({
                    error: true,
                    success: false,
                    errors: [
                        'Unauthorized access!'
                    ],
                    statusCode: 403
                })
            }

        }
        else {
            return res.status(403).json({
                error: true,
                success: false,
                errors: [
                    'Unauthorized access!'
                ],
                statusCode: 403
            })
        }

    } catch (error) {
        return res.status(403).json({
            error: true,
            success: false,
            errors: [
                'Unauthorized access!'
            ],
            statusCode: 403
        })
    }
}



exports.loggedInAsTechnicalAdmin = async (req, res, next) => {
    const { authorization } = req.headers
    try {
        const token = authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        if (decoded) {
            const { id } = decoded
            let user = await User.findByPk(id)
            if (user && user.role == roles.TECHNICAL_ADMIN) {
                next()
            }
            else {
                return res.status(403).json({
                    error: true,
                    success: false,
                    errors: [
                        'Unauthorized access!'
                    ],
                    statusCode: 403
                })
            }

        }
        else {
            return res.status(403).json({
                error: true,
                success: false,
                errors: [
                    'Unauthorized access!'
                ],
                statusCode: 403
            })
        }

    } catch (error) {
        return res.status(403).json({
            error: true,
            success: false,
            errors: [
                'Unauthorized access!'
            ],
            statusCode: 403
        })
    }
}


exports.loggedInAsProjectManager = async (req, res, next) => {
    const { authorization } = req.headers
    try {
        const token = authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        if (decoded) {
            const { id } = decoded
            let user = await User.findByPk(id)
            if (user && user.role == roles.PROJECT_MANAGER) {
                next()
            }
            else {
                return res.status(403).json({
                    error: true,
                    success: false,
                    errors: [
                        'Unauthorized access!'
                    ],
                    statusCode: 403
                })
            }

        }
        else {
            return res.status(403).json({
                error: true,
                success: false,
                errors: [
                    'Unauthorized access!'
                ],
                statusCode: 403
            })
        }

    } catch (error) {
        return res.status(403).json({
            error: true,
            success: false,
            errors: [
                'Unauthorized access!'
            ],
            statusCode: 403
        })
    }
}


exports.loggedInAsFinancialOfficer = async (req, res, next) => {
    const { authorization } = req.headers
    try {
        const token = authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        if (decoded) {
            const { id } = decoded
            let user = await User.findByPk(id)
            if (user && user.role == roles.FINANCIAL_OFFICER) {
                next()
            }
            else {
                return res.status(403).json({
                    error: true,
                    success: false,
                    errors: [
                        'Unauthorized access!'
                    ],
                    statusCode: 403
                })
            }

        }
        else {
            return res.status(403).json({
                error: true,
                success: false,
                errors: [
                    'Unauthorized access!'
                ],
                statusCode: 403
            })
        }

    } catch (error) {
        return res.status(403).json({
            error: true,
            success: false,
            errors: [
                'Unauthorized access!'
            ],
            statusCode: 403
        })
    }
}


exports.loggedInAsBudgetProcurementManager = async (req, res, next) => {
    const { authorization } = req.headers
    try {
        const token = authorization.split(' ')[1]

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        if (decoded) {
            const { id } = decoded
            let user = await User.findByPk(id)
            if (user && user.role == roles.BUDGET_AND_PROCUREMENT_MANAGER) {
                next()
            }
            else {
                return res.status(403).json({
                    error: true,
                    success: false,
                    errors: [
                        'Unauthorized access!'
                    ],
                    statusCode: 403
                })
            }

        }
        else {
            return res.status(403).json({
                error: true,
                success: false,
                errors: [
                    'Unauthorized access!'
                ],
                statusCode: 403
            })
        }

    } catch (error) {
        return res.status(403).json({
            error: true,
            success: false,
            errors: [
                'Unauthorized access!'
            ],
            statusCode: 403
        })
    }
}