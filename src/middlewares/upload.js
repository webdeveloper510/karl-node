const multer = require('multer');
const path = require('path');

// set disk storage.
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.resolve('./src/images'));
    },
    filename : function(req, file, cb){
        const extention = file.originalname.substr(file.originalname.lastIndexOf('.'));
        cb(null, file.filename +'_'+Date.now() + extention);
    }
});

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

var uploadImages = multer({
    storage: storage, 
    limits : { 
        fileSize : 1024 * 1024 * 5 
    },
    fileFilter : filefilter
});

module.exports = uploadImages