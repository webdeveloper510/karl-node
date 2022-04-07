const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


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
    },
    shownOnDashboard : {
      type : Boolean,
      default : false
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



// const holidaysSchema = {
//   title: {
//     type: String,
//     required: false,
//   },
//   description: {
//     type: String,
//     required: false,
//   },
//   image: {
//     type: String,
//     required: false,
//   },
//   percentage:{
//     type:Number
//   },
//   type: {
//     type: String,
//     required: false,
//   }    
// };