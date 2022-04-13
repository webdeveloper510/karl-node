const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const sectionsSchema = {
        title: {
          type: String,
          required: true,
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


const homePageSchema = mongoose.Schema(
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
    }
  },
  {
    timestamps: true,
  }
);

homePageSchema.plugin(toJSON);
homePageSchema.plugin(paginate);


/**
 * @typedef Section
 */
const HomePage = mongoose.model('HomePage', homePageSchema);

module.exports = HomePage;
