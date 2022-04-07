const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { uploadFileService }  = require('../services');

const uploadImage = catchAsync(async (req, res) => {
   
});


module.exports = {
   uploadImage
}