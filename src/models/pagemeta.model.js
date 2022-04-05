const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');





const pageMetaSchema = mongoose.Schema(
  {
    metatitle:{
      type:String
    },
    metadescription:{
      type:String
    },
    canonical:{
      type:String
    },
    type:{
        type:String
    }

  },
  {
    timestamps: true,
  }
);

pageMetaSchema.plugin(toJSON);
pageMetaSchema.plugin(paginate);




/**
 * @typedef Section
 */
const PageMeta = mongoose.model('PageMeta', pageMetaSchema);

module.exports = PageMeta;
