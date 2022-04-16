const express = require('express')
const { getAllUsers, getUserById, createUser, deleteUser, updateUser } = require('../controllers/user.controller')
const { userEmailCannotBeEmpty, isValidUserEmailAddress: isValudUserEmailAddress, usernameCannotBeEmpty, userPhoneCannotBeEmpty, userRoleCannotBeEmpyt, userStatusCannotBeEmpty, userPasswordCannotBeEmpty, isValidUserRole, validPasswordLength, validUserPhoneNumber, validUserStatus, usernameMustAtLeast8Chars } = require('../errors/user.errors')
const { loggedInAsTechnicalAdmin } = require('../middlewares')
const router = express.Router()

router.get('/', loggedInAsTechnicalAdmin, getAllUsers)
router.get('/:id', loggedInAsTechnicalAdmin, getUserById)
router.post('/', loggedInAsTechnicalAdmin, userEmailCannotBeEmpty, usernameCannotBeEmpty, isValudUserEmailAddress, usernameMustAtLeast8Chars, userPhoneCannotBeEmpty, validUserPhoneNumber, userRoleCannotBeEmpyt, isValidUserRole, userStatusCannotBeEmpty, validUserStatus, userPasswordCannotBeEmpty, validPasswordLength, createUser)
router.delete('/:id', loggedInAsTechnicalAdmin, deleteUser)
router.patch('/:id', loggedInAsTechnicalAdmin, updateUser)

module.exports = router