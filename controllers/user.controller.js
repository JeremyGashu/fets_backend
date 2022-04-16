const User = require('../models').users
const Company = require('../models').company
const { validationResult } = require('express-validator')

exports.getAllUsers = async (req, res) => {
    User.findAll().then(val => {
        res.status(200).json({
            error: false,
            success: true,
            body: val,
            statusCode: 200
        })
    }).catch(err => {
        res.status(500).json({
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

exports.getUserById = async (req, res) => {

    const { id } = req.params
    User.findByPk(id).then(val => {
        if (!val) {
            return res.status(422).json({
                error: true,
                errors: [
                    'User cannot be found with this ID!',
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
        res.status(500).json({
            error: true,
            success: false,
            errors: [
                'Internal Server Error!',
            ],
            statusCode: 500

        })
    })

}

exports.deleteUser = async (req, res) => {
    const { id } = req.params
    User.destroy({
        where: {
            id
        }
    }).then(val => {
        if (!val) {
            return res.status(422).json({
                error: true,
                success: false,
                errors: [
                    'User cannot be found with this ID!',
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
                'Internal Server Error!',
            ],
            statusCode: 500

        })
    })
}

exports.createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: true, errors: errors.array().map(err => err.msg), statusCode: 422, });
    }

    const { name, email, phone, role, status, password, confirm, company_id } = req.body

    let selectedCompany = await Company.findByPk(company_id)
    if (!selectedCompany) {
        return res.status(422).json({
            error: true,
            success: false,
            errors: [
                'Company cannot be found with this ID!',
            ],
            statusCode: 422

        })
    }
    User.create({ name, email, phone, role, status, password, confirm, company_id }).then(val => {
        res.status(200).json({
            error: false,
            success: true,
            body: val,
            statusCode: 200
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            error: true,
            success: false,
            errors: [
                'Internal Server Error!',
            ],
            statusCode: 500

        })
    })
}

exports.updateUser = async (req, res) => {
    const { id } = req.params

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: true, errors: errors.array().map(err => err.msg), statusCode: 422, });
    }

    let selectedUser = await User.findByPk(id)

    if (!selectedUser) {
        return res.status(422).json({
            error: true,
            errors: [
                'User cannot be found with this ID!',
            ],
            statusCode: 422

        })
    }

    const { name, email, phone, role, status, password, company_id } = req.body


    selectedUser.update({
        name: name || selectedUser.name,
        email: email || selectedUser.email,
        role: role || selectedUser.role,
        status: status || selectedUser.status,
        phone: phone || selectedUser.phone,
        password: password || selectedUser.password,
        company_id: company_id || selectedUser.company_id
    }).then(val => {
        res.status(200).json({
            error: false,
            success: true,
            body: val,
            statusCode: 200
        })
    }).catch(err => {
        res.status(500).json({
            error: true,
            success: false,
            errors: [
                'Internal Server Error!',
            ],
            statusCode: 500

        })
    })
}