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
    // const dataFile = await PageMeta.create(PageMetaBody);
    return await PageMeta.create(PageMetaBody);
  };


/**
 * Update Page Meta based on id
 * @returns {Promise<PageMeta>}
 */
   const updatePageMeta = async (req) => {
    const pagemeta = await getPageMetaById(req.body.id);
    if (!pagemeta) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
    }
    let body = req.body;
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