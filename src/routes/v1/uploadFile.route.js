const uploadFileController = require('../../controllers/uploadFile.controller');
const router = require('express').Router();

router.route('/images').post(uploadFileController.uploadImage);

module.exports = router;