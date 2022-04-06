const { string } = require('joi');
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


// const destinationsSchema = {
//       title: {
//         type: String,
//         required: false,
//       },
//       description: {
//         type: String,
//           required: false,
//       },
//       image: {
//         type: String,
//           required: false,
//       },
//       percentage:{
//         type:Number
//       }        
// };

const destinationSchema = mongoose.Schema(
  {
  title: {
    type: String,
    required: false,
    unique : true,
  },
  slides:{
    type:Array,
    required:false  
  },
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
  
  },
  {
    timestamps: true,
  }
);

destinationSchema.plugin(toJSON);
destinationSchema.plugin(paginate);

/**
 * @typedef Section
 */
const Destination = mongoose.model('Destinations', destinationSchema);

module.exports = Destination;
