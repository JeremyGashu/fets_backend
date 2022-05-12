const Company = require('../models').company
const { validationResult } = require('express-validator')
const User = require('../models').users

require('dotenv').config()

exports.getAllCompanies = async (req, res) => {
    Company.findAll().then(val => {
        res.status(200).json({
            error: false,
            success: true,
            body: val,
            statusCode: 200
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

exports.getCompanyById = async (req, res) => {
    const { id } = req.params
    Company.findByPk(id, {
        include: [{
            model: User
        }]
    }).then(val => {
        if (!val) {
            return res.status(422).json({
                error: true,
                errors: [
                    'Company cannot be found with this ID!',
                ],
                statusCode: 422,
                success: false,


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

exports.createCompanies = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: true, errors: errors.array().map(err => err.msg), statusCode: 422, });
    }

    const { name, email, phone, address, description } = req.body
    Company.create({ name, email, phone, address, description }).then(val => {
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


exports.deleteCompany = async (req, res) => {
    const { id } = req.params
    Company.destroy({
        where: {
            id
        }
    }).then(val => {
        if (!val) {
            return res.status(422).json({
                error: true,
                success: false,
                errors: [
                    'Company cannot be found with this ID!',
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

exports.updateCompany = async (req, res) => {

    const { id } = req.params

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: true, errors: errors.array().map(err => err.msg), statusCode: 422, });
    }

    let selectedCompany = await Company.findByPk(id)

    if (!selectedCompany) {
        return res.status(422).json({
            error: true,
            errors: [
                'Company cannot be found with this ID!',
            ],
            statusCode: 422,
            success: false
        })
    }

    const { name, email, phone, address, description } = req.body


    selectedCompany.update({
        name: name || selectedCompany.name,
        email: email || selectedCompany.email,
        address: address || selectedCompany.address,
        description: description || selectedCompany.description,
        phone: phone || selectedCompany.phone
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