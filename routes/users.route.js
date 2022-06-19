const express = require('express')
const { getAllUsers, getUserById, createUser, deleteUser, updateUser, donorSignUp, changeUserActivity, getUserByUsername, getDonorsCount } = require('../controllers/user.controller')
const { userEmailCannotBeEmpty, isValidUserEmailAddress: isValudUserEmailAddress, userRoleCannotBeEmpyt, userPasswordCannotBeEmpty, isValidUserRole, validPasswordLength, usernameMustAtLeast8Chars, usernameCannotBeEmpty, userPhoneCannotBeEmpty, validUserPhoneNumber } = require('../errors/user.errors')
const { loggedInAsTechnicalAdmin } = require('../middlewares')
const router = express.Router()

router.get('/', loggedInAsTechnicalAdmin, getAllUsers)
router.get('/donor-count', getDonorsCount)
router.get('/:id', loggedInAsTechnicalAdmin, getUserById)
router.get('/username/:username', getUserByUsername)
router.post('/signup', userPhoneCannotBeEmpty, validUserPhoneNumber, usernameCannotBeEmpty, userEmailCannotBeEmpty, isValudUserEmailAddress, usernameMustAtLeast8Chars, userPasswordCannotBeEmpty, validPasswordLength, donorSignUp)
router.post('/', userEmailCannotBeEmpty, isValudUserEmailAddress, usernameMustAtLeast8Chars, userRoleCannotBeEmpyt, isValidUserRole, userPasswordCannotBeEmpty, validPasswordLength, createUser)
router.delete('/:id', loggedInAsTechnicalAdmin, deleteUser)
router.patch('/:id', loggedInAsTechnicalAdmin, updateUser)
router.patch('/profile/:id', updateUser)
router.patch('/change-status/:id', loggedInAsTechnicalAdmin, changeUserActivity)

module.exports = router