const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { PageMeta, HomePage } = require('../models');

const getPageMetaById = async (id) => {
  return await PageMeta.findById(id);
};

/**
 * Get Meta of page by type
 * @param {{string}} type
 * @returns {Promise<PageMeta>}
 */
  const getPageMeta = async (type) => {
    return await PageMeta.findOne({type});
  };

/**
 * Get List of  page Meta
 * @param {{string}} type
 * @returns {Promise<PageMeta>}
 */
  const listPageMeta = async () => {
  return await PageMeta.find({});
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
    return await PageMeta.create(PageMetaBody);
  };

/**
 * Update Page Meta based on id
 * @returns {Promise<PageMeta>}
 */
   const updatePageMeta = async (req) => {
     const pageMeta = await PageMeta.findOneAndUpdate({type : req.body.type}, req.body, {new : true, useFindAndModify: false})
     if (!pageMeta) {
       throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
      }
      return pageMeta;
    // Object.assign(pageMeta, req.body);
    // await pageMeta.save();
  };
  
  module.exports = {
    getPageMeta,
    listPageMeta,
    createPageMeta,
    updatePageMeta
  };