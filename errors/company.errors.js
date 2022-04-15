const { check } = require("express-validator");

exports.emailCannotBeEmpty = check('email').notEmpty().withMessage('Email cannot be empty')

exports.isValidCompanyEmail = check('email').isEmail().withMessage('Please enter valid email address!')

exports.companyNameCannotBeEmpty = check('name').notEmpty().withMessage('Name cannot be empty')

exports.companyPhoneCannotBeEmpty = check('phone').notEmpty().withMessage('Phone Number cannot be empty')

exports.companyAddressCannotBeEmpty = check('address').notEmpty().withMessage('Address cannot be empty')

exports.companyDescriptionCannotEmpty = check('description').notEmpty().withMessage('Description cannot be empty')