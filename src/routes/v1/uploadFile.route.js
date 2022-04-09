const uploadFileController = require('../../controllers/uploadFile.controller');
const uploadFileMiddleware = require('../../middlewares/upload');
const router = require('express').Router();

router.route('/images').post(uploadFileMiddleware.array('image', 20), uploadFileController.uploadImage);

module.exports = router;

/**
* @swagger
* /upload/images:
*   post:
*     summary: Uploads a file.
*     consumes:
*       - multipart/form-data
*     parameters:
*       - in: formData
*         name: upfile
*         type: file
*         description: The file to upload.
*    responses:
*      "201":
*        description: Data Fetched
*        content:
*          application/json:
*            schema:
*               $ref: '#/components/schemas/HomePage'
*      "403":
*        $ref: '#/components/responses/Forbidden'
*/