const httpStatus = require('http-status');
const { HomePage } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get section by type
 * @param {{string}} type
 * @returns {Promise<HomePage>}
 */
 const getHomePageSectionById = async (id) => {
    return HomePage.findById(id);
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
 * Update Home Page Section
 * @returns {Promise<User>}
 */
const updateHomePageSection = async (req) => {
  const section = await getHomePageSectionById(req.body.id);
  if (!section) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
  }
  let body = req.body
  delete body['id']
  Object.assign(section, body);
  await section.save();
  return section;
};



  module.exports = {
    getHomePageSectionById,
    createHomePageSection,
    updateHomePageSection
  };