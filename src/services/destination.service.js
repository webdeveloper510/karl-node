const httpStatus = require('http-status');
const { Destination, Section } = require('../models');
const ApiError = require('../utils/ApiError');
const mongoose = require('mongoose');


/**
 * Get section by type
 * @param {{string}} id
 * @returns {Promise<Destination>}
 */
  const getDestinationById = async (id) => {
    return await Destination.findById(id);
  }


/**
 * Get destination by name
 * @param {{string}} name
 * @returns {Promise<Destination>}
 */
 const getDestinationByName = async (name) => {
  return await Destination.findOne({title:name});
};


/**
 * Get sections by destinationId
 * @param {{string}} id
 * @returns {Promise<Destination>}
 */
 const getDestinationSections = async (id) => {
  return await Section.find({destination:mongoose.Types.ObjectId(id)});
};


 /**
 * Get sections by destinationId
 * @param {{string}} name
 * @returns {Promise<Destination>}
 */
  const getDestinationSectionsFromName = async (name) => {
    //return Destination.findOne({title:name});
    return await Section.find({destination:name});
  };


/**
 * Get destination section by  sectionId
 * @param {{string}} id
 * @param {{string}} sectionId
 * @returns {Promise<Destination>}
 */
  const getDestinationSection = async (id) => {
    return await Section.findById(id);
  };


/**
 * Query for users
 * @returns {Promise<HomePage>}
 */
 const getDestinationList = async (filter) => {
  const destinations = await Destination.find(filter);
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
    return await Destination.create(destinationBody);
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
 * Update Destination Section
 * @returns {Promise<Section>}
 */
   const updateDestinationSection = async (req) => {
    const destinationSection = await getDestinationSection(req.body.id);
    if (!destinationSection) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
    }
    let body = req.body;
    delete body['id']
    Object.assign(destinationSection, body);
    await destinationSection.save();
    return destinationSection;
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
  return await Section.create(destinationSectionBody);
};

const getDestinationMeta = async (id) => {
  return await Destination.findById(id).select('metaTitle metaDescription canonical');
}

const getAllDestinationMeta = async () => {
  return await Destination.find({}).select('metaTitle metaDescription canonical');
}

const deleteDestinationSection = async (destinationId, sectionId) => {
  return await Section.updateOne({destination :destinationId}, {$pull: {sections: {_id: sectionId}}}, {new : true});
  // const data = await Section.findById({_id : sectionId})
  // console.log(data.sections)
  // const data = await Destination.update({_id: sectionId},{"$pull" : {"sections" : { "key" : 0}}})
  // console.log(data)
  // const data = await Section.findById(destinationId)
  // console.log(data)
}

module.exports = {
  getDestinationList,
  getDestinationById,
  createDestination,
  getDestinationByName,
  updateDestination,
  getDestinationSectionsFromName,
  createDestinationSection,
  getDestinationSections,
  getDestinationSection,
  updateDestinationSection,
  getDestinationMeta,
  getAllDestinationMeta,
  deleteDestinationSection
};