const express = require('express')
const { createCompanies, getAllCompanies, getCompanyById, deleteCompany, updateCompany } = require('../controllers/company.controller')
const { companyNameCannotBeEmpty, emailCannotBeEmpty, isValidCompanyEmail, companyPhoneCannotBeEmpty, companyAddressCannotBeEmpty, companyDescriptionCannotEmpty } = require('../errors/company.errors')
const { loggedInAsTechnicalAdmin } = require('../middlewares')

const router = express.Router()

router.get('/', getAllCompanies)
router.get('/:id', getCompanyById)
router.delete('/:id', loggedInAsTechnicalAdmin, deleteCompany)
router.patch('/:id', loggedInAsTechnicalAdmin, updateCompany)
router.post('/', loggedInAsTechnicalAdmin, emailCannotBeEmpty, isValidCompanyEmail, companyNameCannotBeEmpty, companyPhoneCannotBeEmpty, companyAddressCannotBeEmpty, companyDescriptionCannotEmpty, createCompanies)

module.exports = router