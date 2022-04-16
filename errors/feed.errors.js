const {check} = require('express-validator');


module.exports = {
    feedDescriptionCannotBeEmpty: check('description').notEmpty().withMessage("Description can not be empty"),
    feedTitleCannotBeEmpty: check('title').notEmpty().withMessage("Title can not be empty"),
    feedMetadataCannotBeEmpty: check('metadata').notEmpty().withMessage("Metadata can not be empty"),
    feedImageCannotBeEmpty: check('image').notEmpty().withMessage("Image can not be empty"),

}