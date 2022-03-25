const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const destinationsSchema = 
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
        type: {
          type: String,
          required: false,
        }
        
    };



const destinationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    slides:{
      type:Array,
      required:false  
    },
    type:{
      type:String,
      required:false
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
