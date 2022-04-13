const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const pageMetaSchema = mongoose.Schema(
  {
    metaTitle:{
      type:String
    },
    metaDescription:{
      type:String
    },
    canonical:{
      type:String
    },
    homePage:{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'HomePage',
      required: false,
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
