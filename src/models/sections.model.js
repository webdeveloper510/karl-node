const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const subsectionsSchema = {
        title: {
          type: String,
          required: false,
        },
        description: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        percentage:{
          type:Number,
          required: false,
        },
};


const sectionsSchema = mongoose.Schema(
    {
        title: {
          type: String,
          required: false,
        },
        description: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        percentage:{
            type:Number
        },
        // type: {
        //   type: String,
        //   required: false,
        // },
        destination:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Destinations',
            required: false,
        },
        sections:{
            type:[subsectionsSchema],
            required:false  
        }
    }
);


sectionsSchema.plugin(toJSON);
sectionsSchema.plugin(paginate);
    
    
/**
* @typedef Section
*/
const Section = mongoose.model('Sections', sectionsSchema);
    
module.exports = Section;
    
