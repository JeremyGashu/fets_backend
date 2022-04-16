const {check} = require('express-validator')
exports.titleCannotBeEmpty = check('title').notEmpty().withMessage('Title cannot be empty!')
exports.contentCannotBeEmpty=check('content').notEmpty().withMessage('Content cannot be empty!')
exports.userIdCannotBeEmpty=check('user_id').notEmpty().withMessage('User ID cannot be empty!')
