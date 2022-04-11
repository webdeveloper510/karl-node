const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const path = require('path');
const fs = require('fs');

const uploadImage = catchAsync(async (req, res) => {
   if(!req.files){
      return res.status(400).json({
         msg : "please upload file"
      })
   }

   if(req.files.image.mimetype !== 'image/png' || req.files.image.mimetype !== 'image/jpg' || req.files.image.mimetype !== 'image/jpeg'){
      return res.status(400).json({
         msg : 'File format is not valid'
      })
   }

   fs.writeFile(path.resolve(`./src/images/${req.files.image.name}`), req.files.image.data, 'utf-8', function(err){
      if(err){
         return res.status(200).json({
            msg : "file upload failed"
         })
      }

      res.status(200).json({
         msg : "file uploaded successfully"
      })
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