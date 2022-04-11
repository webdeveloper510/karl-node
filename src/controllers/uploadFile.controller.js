const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const path = require('path');
const fs = require('fs');

const uploadImage = catchAsync(async (req, res) => {
   let base64Image = req.body.data;
   const extention = req.body.fileName.substr(req.body.fileName.lastIndexOf('.'));
   const filePAth = path.join(`./uploads/${req.body.fileName.split('.')[0] + '_'+Date.now()+extention}`)
   fs.writeFile(path.resolve(`${filePAth}`), base64Image, {encoding: 'base64'}, function(err) {
      if(err){
         console.log(err)
         throw new ApiError(httpStatus.BAD_REQUEST, 'File Upload Failed');
      }else{
         const fileUrl = `http://138.68.163.128:3001/${filePAth}`
         res.status(200).json({
            msg : "file uploaded",
            url : fileUrl
         })
      }
  });

   // const file = req.files.image;
   // const fileName = req.files.name
   // file.mv('./src/images', fileName, function(err){
   //    if(err){
   //       console.log(err)
   //       res.send(400).json({
   //          msg : "file not uploaded"
   //       })
   //    }else{
   //       res.status(200).json({
   //          msg : "file uploaded"
   //       })
   //    }
   // })
   // if(!req.files){
   //    throw new ApiError(httpStatus.BAD_REQUEST, 'No file uploaded');
   // }
   // let imageUrlArray = [];
   // for(let file of req.files){
   //    let imageUrl = `http://138.68.163.128:3001/${file.path}`;
   //    imageUrlArray.push(imageUrl);
   // }
   // res.status(httpStatus.CREATED).send(imageUrlArray);
});

module.exports = {
   uploadImage
}