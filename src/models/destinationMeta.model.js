const mongoose = require('mongoose');

const destinationMetaSchema = mongoose.Schema({
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

module.exports = mongoose.model('DestinationMeta', destinationMetaSchema);