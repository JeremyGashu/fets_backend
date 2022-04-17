const express = require('express')
const { getAllUsers, getUserById, createUser, deleteUser, updateUser } = require('../controllers/user.controller')
const { userEmailCannotBeEmpty, isValidUserEmailAddress: isValudUserEmailAddress, userRoleCannotBeEmpyt, userStatusCannotBeEmpty, userPasswordCannotBeEmpty, isValidUserRole, validPasswordLength, validUserStatus, usernameMustAtLeast8Chars } = require('../errors/user.errors')
const { loggedInAsTechnicalAdmin } = require('../middlewares')
const router = express.Router()

router.get('/', loggedInAsTechnicalAdmin, getAllUsers)
router.get('/:id', loggedInAsTechnicalAdmin, getUserById)
router.post('/', userEmailCannotBeEmpty, isValudUserEmailAddress, usernameMustAtLeast8Chars, userRoleCannotBeEmpyt, isValidUserRole, userPasswordCannotBeEmpty, validPasswordLength, createUser)
router.delete('/:id', loggedInAsTechnicalAdmin, deleteUser)
router.patch('/:id', loggedInAsTechnicalAdmin, updateUser)

module.exports = router