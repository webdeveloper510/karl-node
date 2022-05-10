const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const submenusSchema = {
        title: {
          type: String,
          required: false,
        },
        link: {
          type: String,
          required: false,
      },
};

const menuSchema = mongoose.Schema(
    {
        title: {
          type: String,
          required: false,
        },
        image: {
            type: String,
            required: false,
        },
     
        icon: {
          type: String,
          required: false,
      },
        subMenus:{
            type:[submenusSchema],
            required:false  
        }
    }
);


menuSchema.plugin(toJSON);
menuSchema.plugin(paginate);
    
    
/**
* @typedef Menus
*/
const Menus = mongoose.model('Menus', menuSchema);
    
module.exports = Menus;
    
