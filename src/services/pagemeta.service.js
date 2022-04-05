const httpStatus = require('http-status');
const { PageMeta } = require('../models');
const ApiError = require('../utils/ApiError');
const HomePageMeta = require('../models/homepageMeta.model');
const destinationMeta = require('../models/destinationMeta.model');

/**
 * Get Meta of page by type
 * @param {{string}} type
 * @returns {Promise<PageMeta>}
 */
  const getPageMeta = async (type) => {
    return PageMeta.findOne({type});
  };


  const getPageMetaById = async (type, id, updateData) => {
    if(type === 'homepage'){
      return await HomePageMeta.findByIdAndUpdate(id, {$set : updateData}, {new : true, runValidators : true});
    }
    if(type === 'destination'){
      return await destinationMeta.findByIdAndUpdate(id, {$set : updateData}, {new : true, runValidators : true});
    }
  };


/**
 * Get List of  page Meta
 * @param {{string}} type
 * @returns {Promise<PageMeta>}
 */
 const listPageMeta = async () => {
  return PageMeta.find();
};


  /**
 * Create  Meta Data
 * @param {Object} PageMetaBody
 * @returns {Promise<PageMeta>}
 */
const createPageMeta = async (PageMetaBody) => {
    // if (await User.isEmailTaken(userBody.email)) {
    //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    // }
    return PageMeta.create(PageMetaBody);
  };


  /**
 * Update Page Meta based on id
 * @returns {Promise<PageMeta>}
 */
   const updatePageMeta = async (req) => {
    const { id, type, metatitle, metadescription, canonical } = req.body;
    if(!metatitle || !metadescription || !canonical){
      throw new ApiError(httpStatus.BAD_REQUEST, 'please provide required fields');
    }
    const updateData = {
      metatitle,
      metadescription,
      canonical
    }
    const pageMeta = await getPageMetaById(type, req.body.id, updateData);
    if(!pageMeta){
      throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
    }
    let body = req.body;
    delete body['id'];
    Object.assign(pageMeta, body);
    return pageMeta;
  
    // const pagemeta = await getPageMetaById(req.body.id);
    // console.log(pagemeta)
    // if (!pagemeta) {
    //   throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
    // }
    // console.log(pagemeta)
    // let body = req.body
    // delete body['id']
    // Object.assign(pagemeta, body);
    // await pagemeta.save();
    // return pagemeta;
  };
  


 

  module.exports = {
    getPageMeta,
    listPageMeta,
    createPageMeta,
    updatePageMeta

  };