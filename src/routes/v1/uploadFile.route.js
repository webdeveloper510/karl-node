const uploadFileController = require('../../controllers/uploadFile.controller');
const uploadFileMiddleware = require('../../middlewares/upload');
const router = require('express').Router();

router.route('/images').post(uploadFileMiddleware.single('image'), uploadFileController.uploadImage);

module.exports = router;