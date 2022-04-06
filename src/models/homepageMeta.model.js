const mongoose = require('mongoose');

const homePageMetaSchema = new mongoose.Schema({
    metaTitle : {
        type : String,
        required : true
    },
    metaDescription : {
        type : String,
        required : true
    },
    canonical : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('HomePageMeta', homePageMetaSchema);

