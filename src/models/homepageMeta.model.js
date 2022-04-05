const mongoose = require('mongoose');

const homePageMetaSchema = new mongoose.Schema({
    metatitle : {
        type : String,
        required : true
    },
    metadescription : {
        type : String,
        required : true
    },
    canonical : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('HomePageMeta', homePageMetaSchema);

