const httpStatus = require('http-status');
const { HomePage } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get section by type
 * @param {{string}} type
 * @returns {Promise<HomePage>}
 */
 const getHomePageSectionById = async (req) => {
    return HomePage.findById(req.params.id);
  };


  /**
 * Create  HomePage
 * @param {Object} homePageBody
 * @returns {Promise<HomePage>}
 */
const createHomePageSection = async (homePageSectionBody) => {
    // if (await User.isEmailTaken(userBody.email)) {
    //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    // }
    return HomePage.create(homePageSectionBody);
  };


  /**
 * Update  HomePage
 * @param {Object} homePageBody
 * @returns {Promise<HomePage>}
 */
   const updateHomePageSection = async (req) => {
    // if (await User.isEmailTaken(userBody.email)) {
    //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    // }
    let body = req.body
    delete body['id']
    return HomePage.updateOne({_id:req.body.id},body);
  };



  module.exports = {
    getHomePageSectionById,
    createHomePageSection,
    updateHomePageSection
  };