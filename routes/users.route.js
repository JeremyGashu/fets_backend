const express = require('express')
const { getAllUsers, getUserById, createUser, deleteUser, updateUser } = require('../controllers/auth.controller')
const { userEmailCannotBeEmpty, isValidUserEmailAddress: isValudUserEmailAddress, usernameCannotBeEmpty, userPhoneCannotBeEmpty, userRoleCannotBeEmpyt, userStatusCannotBeEmpty, userPasswordCannotBeEmpty, isValidUserRole, validPasswordLength, validUserPhoneNumber, validUserStatus } = require('../errors/user.errors')
const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', userEmailCannotBeEmpty, isValudUserEmailAddress, usernameCannotBeEmpty, userPhoneCannotBeEmpty, validUserPhoneNumber, userRoleCannotBeEmpyt, isValidUserRole, userStatusCannotBeEmpty, validUserStatus, userPasswordCannotBeEmpty, validPasswordLength, createUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

module.exports = router