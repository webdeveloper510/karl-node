const httpStatus = require('http-status');
const { HomePage } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get section by type
 * @param {{string}} type
 * @returns {Promise<HomePage>}
 */
 const getHomePage = async () => {
    return HomePage.findOne({type:"homepage"});
  };


  /**
 * Create  HomePage
 * @param {Object} homePageBody
 * @returns {Promise<HomePage>}
 */
const createHomePage = async (homePageBody) => {
    // if (await User.isEmailTaken(userBody.email)) {
    //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    // }
    return HomePage.create(homePageBody);
  };


  /**
 * Update  HomePage
 * @param {Object} homePageBody
 * @returns {Promise<HomePage>}
 */
   const updateHomePage = async (req) => {
    // if (await User.isEmailTaken(userBody.email)) {
    //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    // }
    let body = req.body
    delete body['id']
    return HomePage.updateOne({_id:req.body.id},body);
  };



  module.exports = {
    getHomePage,
    createHomePage,
    updateHomePage
  };