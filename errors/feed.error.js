const { check } = require("express-validator");

exports.descriptionCannotBeEmpty = check('description').notEmpty().withMessage('Description cannot be empty')

exports.metadataCannotBeEmpty = check('metadata').notEmpty().withMessage('Metadata cannot be empty')

exports.titleCannotBeEmpty = check('title').notEmpty().withMessage('Title cannot be empty')