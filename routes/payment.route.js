const express = require('express')
const { addPaymentInfo } = require('../controllers/payment.controller')
const router = express.Router()

router.post('/add-payment', addPaymentInfo)

module.exports = router