const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { uploadFileService }  = require('../services');

const uploadImage = catchAsync(async (req, res) => {
   if(!req.file){
      throw new ApiError(httpStatus.BAD_REQUEST, 'No file uploaded');
   }
   const upload = await uploadFileService.uploadImage(req.file, req.body);
   res.status(httpStatus.CREATED).send(upload);
});


module.exports = {
   uploadImage
}