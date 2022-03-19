const mongoose = require('mongoose');
const { toJSON } = require('./plugins');


const sectionsSchema = mongoose.Schema(
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
        required: true,
        },
    }

);

const sectionSchema = mongoose.Schema(
  {
    background: {
      type: String,
      required: true,
    },
    title:{
      type:String,
      required:true  
    },
    sections:{
        type:[sectionsSchema],
        required:true  
    },
    description1:{
        type:String,
        required:true  
    },
    description2:{
        type:String,
        required:true  
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




// add plugin that converts mongoose to json
sectionSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Section = mongoose.model('Sections', sectionSchema);

module.exports = Section;
