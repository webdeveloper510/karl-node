const httpStatus = require('http-status');
const { HomePage, PageMeta, Destination, Holiday } = require('../models');

const ApiError = require('../utils/ApiError');

/**
 * Get section by type
 * @param {{string}} type
 * @returns {Promise<HomePage>}
 */
  const getHomePageSectionById = async (id) => {
    return await HomePage.findById(id);
  };

/**
 * Query for users
 * @returns {Promise<HomePage>}
 */
 const listHomePageSections = async (filter, options) => {
  const sections = await HomePage.find();
  return sections;
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
    return await HomePage.create(homePageSectionBody);
  };

  /**
 * Create  HomePage
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


const showHomePageDestionation = async (req) => {
  const { shownOnDashboard } = req.body;
  return await Destination.find({shownOnDashboard : shownOnDashboard});
}


const showHomePageHoliday = async (req) => {
  const { shownOnDashboard } = req.body;
  return await Holiday.find({shownOnDashboard : shownOnDashboard});
}


module.exports = {
  listHomePageSections,
  getHomePageSectionById,
  createHomePageSection,
  updateHomePageSection,
  showHomePageDestionation,
  showHomePageHoliday
};