const httpStatus = require('http-status');
const { PageMeta } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get Meta of page by type
 * @param {{string}} type
 * @returns {Promise<PageMeta>}
 */
 const getPageMeta = async (type) => {
    return PageMeta.findOne({type});
  };


  const getPageMetaById = async (id) => {
    return PageMeta.findById(id);
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
     console.log(req)
    const pagemeta = await getPageMetaById(req.body.id);
    if (!pagemeta) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
    }
    console.log(pagemeta)
    let body = req.body
    delete body['id']
    Object.assign(pagemeta, body);
    await pagemeta.save();
    return pagemeta;
  };
  


 

  module.exports = {
    getPageMeta,
    listPageMeta,
    createPageMeta,
    updatePageMeta
    
  };