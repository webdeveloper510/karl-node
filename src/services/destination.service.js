const httpStatus = require('http-status');
const { Destination } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get section by type
 * @param {{string}} id
 * @returns {Promise<Destination>}
 */
 const getDestinationById = async (id) => {
    return Destination.findById(id);
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
 * Update  Destination
 * @param {Object} destinationBody
 * @returns {Promise<Destination>}
 */
  const updateDestination = async (req) => {
  // if (await User.isEmailTaken(userBody.email)) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  // }
  let body = req.body
  delete body["id"]
  return Destination.updateOne({_id:req.body.id},body);
};



  module.exports = {
    getDestinationList,
    getDestinationById,
    createDestination,
    updateDestination
  };