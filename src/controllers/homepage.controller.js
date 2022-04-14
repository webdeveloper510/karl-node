const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { homePageService } = require('../services');


const listHomePageSections = catchAsync(async (req, res) => {
  const homepageSections = await homePageService.listHomePageSections();
  res.status(httpStatus.CREATED).send(homepageSections);
});

const getHomePageSection = catchAsync(async (req, res) => {
    const homepage = await homePageService.getHomePageSectionById(req.params.id);
    if (!homepage) {
      throw new ApiError(httpStatus.NOT_FOUND, 'HomePage data not found');
    }
    res.send(homepage);
});

const createHomePageSection = catchAsync(async (req, res) => {
  const homepage = await homePageService.createHomePageSection(req.body);
  res.status(httpStatus.CREATED).send(homepage);
});

const updateHomePageSection = catchAsync(async (req, res) => {
  const homepage = await homePageService.updateHomePageSection(req);
  res.status(httpStatus.CREATED).send(homepage);
});

const showHomePageDestionation = catchAsync(async (req, res) => {
  const homePageDestinations = await homePageService.showHomePageDestionation(req);
  res.status(httpStatus.CREATED).send(homePageDestinations);
});

const showHomePageHolidays = catchAsync(async (req, res) => {
  const homePageHolidays = await homePageService.showHomePageHoliday(req);
  res.status(httpStatus.CREATED).send(homePageHolidays);
});

const deleteHomePageSection = catchAsync(async (req, res) => {
  await homePageService.deleteHomePageSection(req.body.homeId);
  res.status(httpStatus.CREATED).json({
    msg : "successfully deleted homepage section",
    success : true
  });
});

// const deleteHomePageSubSection = catchAsync(async (req, res) => {
//   await homePageService.deleteHomePageSubSection(req.body.homeId, req.body.sectionId);
//   res.status(httpStatus.CREATED).json({
//     msg : "successfully deleted homepage sub-section",
//     success : true
//   });
// })


module.exports = {
  listHomePageSections,
  getHomePageSection,
  createHomePageSection,
  updateHomePageSection,
  showHomePageDestionation,
  showHomePageHolidays,
  deleteHomePageSection
  };
  