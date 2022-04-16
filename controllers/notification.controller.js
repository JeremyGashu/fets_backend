const Notification = require('../models').notification
const { validationResult } = require('express-validator')
//GET NOTIFICATIONS
exports.getNotifications = async(req,res) => {
        Notification.findAll().then(val=>{
            res.status(200).json({
                error:false,
                success:true,
                body:val,
                statusCode:200
            })
        }).catch(err=>{
            res.status(500).json({
                error:false,
                success:true,
                errors:[
                    'Internal server Error!',
                ],
                statusCode:500
            })
        })
}
//GET NOTIFICATION BY USER ID
exports.getNotificationByUserId= async(req,res)=>{
    const {user_id}=req.params
    Notification.findOne({
        where:{
            user_id:user_id
        }
    }).then(val=>{
        if (!val) {
            return res.status(422).json({
                error:true,
                errors:[
                    'Notification with this User_id was not found!'
                ],
                statusCode:422
            })
        }
        res.status(200).json({
            error:false,
            success:true,
            body:val,
            statusCode:200
        })
    }).catch(err=>{
        res.status(500).json({
            error:true,
            success:false,
            errors:['Internal Server Error!',],
            statusCode:500
        })
    })
}
//GET NOTIFICATIONS BY ID
exports.getNotificationById = async (req, res) => {

    const { id } = req.params
    Notification.findOne({
        where:{
            id:id
        }
    }).then(val => {
        if (!val) {
            return res.status(422).json({
                error: true,
                errors: [
                    'Notification cannot be found with this ID!',
                ],
                statusCode: 422

            })
        }
        res.status(200).json({
            error: false,
            success: true,
            body: val,
            statusCode: 200
        })
    }).catch(err => {
        res.status(500).json({
            error: true,
            success: false,
            errors: [
                'Internal Server Error! ...',
            ],
            statusCode: 500

        })
    })

}
//CREATE NOTIFICATION
exports.creatNotification = async (req,res) =>{
    const errors=validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error:true,
            errors:errors.array().map(err=>err.msg),
            statusCode:422
        })
    }
    const {title,content,user_id} = req.body

    Notification.create({title,content,user_id}).then(val=>{
        res.status(200).json({
            error:false,
            success:true,
            body:val,
            statusCode:200
        })
    }).catch(err=>{
         res.status(500).json({
            error:true,
            success:false,
            errors:[
                'Internal server error!',
            ],
            statusCode:500
        })
    })
}
//UPDATE NOTIFICATION
exports.updateNotification=async (req,res)=>{
    const {id} =req.params
    const errors=validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error:true,
            errors:errors.array().map(err=>err.msg),
            statusCode:422
        })
    }
    let selectedNotification =  await Notification.findByPk(id)
    
    if(!selectedNotification){
        return res.status(422).json({
            error:true,
            errors:[
                'Notification cannot be found!',
            ],
            statusCode:422
        })
    }
    const {title,content} = req.body
    selectedNotification.update({
        title: title || selectedNotification.title,
        content:content || selectedNotification.content
    }).then(val =>{
        res.status(200).json({
            error:false,
            success:true,
            body:val,
            statusCode:200
        })
    }).catch(err =>{
        res.status(500).json({
            error:true,
            success:false,
            errors:[
                'Internal server error!',
            ],
            statusCode:500
        })
    })
}
//DELETE NOTIFICATION
exports.deleteNotification = async(req,res)=>{
    const {id}=req.params
    Notification.destroy({
        where:{
            id
        }
    }).then(val=>{
        if (!val) {
            return res.status(422).json({
                error:true,
                success:false,
                errors:[
                    'Notification not found!'
                ],
                statusCode:422
            })
        }
        res.status(200).json({
            error:false,
            success:true,
            body:val,
            statusCode:200
        })
    }).catch(err=>{
        res.status(500).json({
            error:true,
            success:false,
            errors:[
                'Internal server error!',
            ],
            statusCode:500
        })
    })
}