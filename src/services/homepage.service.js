const httpStatus = require('http-status');
const { Section } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get section by type
 * @param {{string}} type
 * @returns {Promise<Section>}
 */
 const getSectionByType = async (type) => {
    return Section.findOne({type});
  };


  /**
 * Create  Section1
 * @param {Object} sectionBody
 * @returns {Promise<Section>}
 */
const createSection = async (sectionBody) => {
    // if (await User.isEmailTaken(userBody.email)) {
    //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    // }
    return Section.create(sectionBody);
  };



  module.exports = {
    getSectionByType,
    createSection
  };