const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const destinationsSchema = 
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
        percentage:{
            type:Number
        }
        
    };



const destinationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    image:{
        type:String,
        required:false
    },
    slides:{
      type:String,
      required:true  
    },
    sections:{
        type:[destinationsSchema],
        required:false  
    },
    description:{
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

destinationSchema.plugin(toJSON);
destinationSchema.plugin(paginate);




/**
 * @typedef Section
 */
const Destination = mongoose.model('Destinations', destinationSchema);

module.exports = Destination;
