const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const uploadImage = catchAsync(async (req, res) => {
   if(!req.files){
      throw new ApiError(httpStatus.BAD_REQUEST, 'No file uploaded');
   }
   let imageUrlArray = [];
   for(let file of req.files){
      let imageUrl = `http://138.68.163.128:3001/${file.path}`;
      imageUrlArray.push(imageUrl);
   }
   res.status(httpStatus.CREATED).send(imageUrlArray);
});

module.exports = {
   uploadImage
}