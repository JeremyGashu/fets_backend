const express = require('express')
const {titleCannotBeEmpty,contentCannotBeEmpty,userIdCannotBeEmpty}= require('../errors/notification.errors')
const {creatNotification,getNotifications,getNotificationByUserId,getNotificationById,updateNotification,deleteNotification}= require('../controllers/notification.controller')
const router = express.Router()

router.get('/',getNotifications)
router.get('/user/:user_id',getNotificationByUserId)
router.get('/:id',getNotificationById)
router.delete('/:id',deleteNotification)
router.patch('/:id',updateNotification)
router.post('/',titleCannotBeEmpty,contentCannotBeEmpty,userIdCannotBeEmpty, creatNotification)

module.exports=router