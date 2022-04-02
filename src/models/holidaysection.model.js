const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const subsectionsSchema = 
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
          type:Number,
          required: false,
        },
    };


const holidaySectionsSchema = mongoose.Schema(
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
        },
        holiday:{
           
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Holidays',
            required: false,
              
        },
        sections:{
            type:[subsectionsSchema],
            required:false  
        },
        
        
    }
);


holidaySectionsSchema.plugin(toJSON);
holidaySectionsSchema.plugin(paginate);
    
    
    
    
    /**
     * @typedef Section
     */
    const HolidaySection = mongoose.model('HolidaySections', holidaySectionsSchema);
    
    module.exports = HolidaySection;
    
