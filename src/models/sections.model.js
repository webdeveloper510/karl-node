const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const sectionsSchema = 
    {
        title: {
          type: String,
          required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
        type: String,
        percentage:Number,
        required: true,
        },
    };



const sectionSchema = mongoose.Schema(
  {
    background: {
      type: String,
      required: false,
    },
    title:{
      type:String,
      required:true  
    },
    sections:{
        type:[sectionsSchema],
        required:false  
    },
    description1:{
        type:String,
        required:false  
    },
    description2:{
        type:String,
        required:false  
    },
    type: {
      type: String,
      required: true,
    },
   
  },
  {
    timestamps: true,
  }
);

sectionSchema.plugin(toJSON);
sectionSchema.plugin(paginate);




/**
 * @typedef Section
 */
const Section = mongoose.model('Sections', sectionSchema);

module.exports = Section;
