const httpStatus = require('http-status');
const { Destination,Section } = require('../models');
const ApiError = require('../utils/ApiError');
const mongoose = require('mongoose');


/**
 * Get section by type
 * @param {{string}} id
 * @returns {Promise<Destination>}
 */
 const getDestinationById = async (id) => {
    return Destination.findById(id);
  };


  /**
 * Get section by type
 * @param {{string}} id
 * @returns {Promise<Destination>}
 */
 const getDestinationSections = async (id) => {
  return Section.find({destination:mongoose.Types.ObjectId(id)});
};


  /**
 * Query for users
 * @returns {Promise<HomePage>}
 */
 const getDestinationList = async (filter, options) => {
  const destinations = await Destination.find();
  return destinations;
};


  /**
 * Create  Section1
 * @param {Object} destinationBody
 * @returns {Promise<Destination>}
 */
const createDestination = async (destinationBody) => {
    // if (await User.isEmailTaken(userBody.email)) {
    //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    // }
    return Destination.create(destinationBody);
  };

  /**
 * Update Destination
 * @returns {Promise<Destination>}
 */
   const updateDestination = async (req) => {
    const destination = await getDestinationById(req.body.id);
    if (!destination) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
    }
    let body = req.body
    delete body['id']
    Object.assign(destination, body);
    await destination.save();
    return destination;
  };

    /**
 * Create  Destination Section
 * @param {Object} destinationSectionBody
 * @returns {Promise<Section>}
 */
const createDestinationSection = async (destinationSectionBody) => {
  // if (await User.isEmailTaken(userBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  return Section.create(destinationSectionBody);
};

  



  module.exports = {
    getDestinationList,
    getDestinationById,
    createDestination,
    updateDestination,
    createDestinationSection,
    getDestinationSections
  };