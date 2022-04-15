const httpStatus = require('http-status');
const { Holiday, HolidaySection } = require('../models');
const ApiError = require('../utils/ApiError');
const mongoose = require('mongoose');

/**
 * Get section by type
 * @param {{string}} id
 * @returns {Promise<Holiday>}
 */
  const getHolidayById = async (id) => {
    return await Holiday.findById(id);
  };


/**
 * Get destination by name
 * @param {{string}} name
 * @returns {Promise<Holiday>}
 */
 const getHolidayByName = async (name) => {
  return await Holiday.findOne({title:name});
 };
  

  /**
 * Get sections by destinationId
 * @param {{string}} id
 * @returns {Promise<Holiday>}
 */
 const getHolidaySections = async (id) => {
  return await HolidaySection.find({holiday:mongoose.Types.ObjectId(id)});
 };


  /**
 * Get sections by destinationId
 * @param {{string}} name
 * @returns {Promise<Holiday>}
 */
   const getHolidaySectionsFromName = async (name) => {
    //return Destination.findOne({title:name});
    return await HolidaySection.find({holiday:name});
   };


 /**
 * Get destination section by  sectionId
 * @param {{string}} id
 * @param {{string}} sectionId
 * @returns {Promise<Holiday>}
 */
  const getHolidaySection = async (id) => {
    return await HolidaySection.findById(id);
  };


  /**
 * Query for users
 * @returns {Promise<HomePage>}
 */
  const getHolidayList = async (filter, options) => {
   const holidays = await Holiday.find();
   return holidays;
  };


  /**
 * Create  Section1
 * @param {Object} destinationBody
 * @returns {Promise<Holiday>}
 */
 const createHoliday = async (holidayBody) => {
    // if (await User.isEmailTaken(userBody.email)) {
    //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    // }
  return await Holiday.create(holidayBody);
 };

  /**
 * Update Destination
 * @returns {Promise<Holiday>}
 */
   const updateHoliday = async (req) => {
    const holiday = await getHolidayById(req.body.id);
    if (!holiday) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
    }
    let body = req.body
    delete body['id']
    Object.assign(holiday, body);
    await holiday.save();
    return holiday;
  };


  /**
 * Update Destination Section
 * @returns {Promise<Section>}
 */
   const updateHolidaySection = async (req) => {
    const holidaySection = await getHolidaySection(req.body.id);
    if (!holidaySection) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
    }
    let body = req.body
    delete body['id']
    Object.assign(holidaySection, body);
    await holidaySection.save();
    return holidaySection;
  };

    /**
 * Create  Destination Section
 * @param {Object} holidaySectionBody
 * @returns {Promise<Section>}
 */
const createHolidaySection = async (holidaySectionBody) => {
  // if (await User.isEmailTaken(userBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  return HolidaySection.create(holidaySectionBody);
};

const getHolidayMeta = async (id) => {
  return await Holiday.findById(id).select('metaTitle metaDescription canonical');
}

const getAllHolidaysMeta = async () => {
  return await Holiday.find({}).select('metaTitle metaDescription canonical');
}

const deleteHolidaySection = async (holidayId, sectionId) => {
  return await HolidaySection.updateOne({holiday : holidayId}, {$pull: {sections: {_id: sectionId}}}, {new : true});
}

  
module.exports = {
  getHolidayList,
  getHolidayById,
  createHoliday,
  getHolidayByName,
  updateHoliday,
  getHolidaySectionsFromName,
  createHolidaySection,
  getHolidaySections,
  getHolidaySection,
  updateHolidaySection,
  getHolidayMeta,
  getAllHolidaysMeta,
  deleteHolidaySection
};