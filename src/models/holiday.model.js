const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const holidaysSchema = 
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



const holidaySchema = mongoose.Schema(
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
    type:{
      type:String,
      required:false
    }
   
      
  },
  {
    timestamps: true,
  }
);

holidaySchema.plugin(toJSON);
holidaySchema.plugin(paginate);




/**
 * @typedef Section
 */
const Holiday = mongoose.model('Holidays', holidaySchema);

module.exports = Holiday;
