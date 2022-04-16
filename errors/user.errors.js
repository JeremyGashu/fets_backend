const { check } = require("express-validator");

exports.usernameMustAtLeast8Chars = check('username').isLength({min : 8}).withMessage('Username cannot be less then 8 chars')

exports.userEmailCannotBeEmpty = check('email').notEmpty().withMessage('Email cannot be empty')

exports.isValidUserEmailAddress = check('email').isEmail().withMessage('Please enter valid email address!')

exports.usernameCannotBeEmpty = check('name').notEmpty().withMessage('Name cannot be empty')

exports.userPhoneCannotBeEmpty = check('phone').notEmpty().withMessage('Phone Number cannot be empty')

exports.validUserPhoneNumber = check('phone').isMobilePhone().withMessage('Please enter valid phone number')

exports.userRoleCannotBeEmpyt = check('role').notEmpty().withMessage('Role cannot be empty')

exports.userStatusCannotBeEmpty = check('status').notEmpty().withMessage('Status cannot be empty')

exports.validUserStatus = check('status').isBoolean().withMessage('Status must be boolean')

exports.userPasswordCannotBeEmpty = check('password').notEmpty().withMessage('Password cannot be empty')

exports.validPasswordLength = check('password').isLength({min : 8}).withMessage('Password cannot be less then 8 chars')

exports.isValidUserRole = check('role').isIn(['PROJECT_MANAGER', 'TECHNICAL_ADMIN', 'ADMIN', 'BUGDET_PROCUREMENT_MANAGER', 'FINANCIAL_OFFICER']).withMessage('User role must be of type PROJECT_MANAGER, TECHNICAL_ADMIN, ADMIN, BUGDET_PROCUREMENT_MANAGER, FINANCIAL_OFFICER')
