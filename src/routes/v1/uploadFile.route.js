const uploadFileController = require('../../controllers/uploadFile.controller');
// const uploadFileMiddleware = require('../../middlewares/upload');
const router = require('express').Router();

router.route('/images').post(uploadFileController.uploadImage);

module.exports = router;

/**
* @swagger
* /upload/images:
*   post:
*     summary: image upload
*     description: upload image to database
*     tags: [File]
*     consumes:
*       - multipart/form-data
*     parameters:
*       - in: formData
*         name: uploadfile
*         type: file
*         description: The file to upload
*   responses:
*      "201":
*        description: image uploaded successfully
*        content:
*          application/json:
*            schema:
*               $ref: '#/components/schemas/HomePage'
*      "403":
*        $ref: '#/components/responses/Forbidden'
*/