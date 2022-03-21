const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { homePageService } = require('../services');

const getSection = catchAsync(async (req, res) => {
    const section1 = await homePageService.getSectionByType(req.params.type);
    if (!section1) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Section not found');
    }
    res.send(section1);
});

const createSection = catchAsync(async (req, res) => {
    const user = await homePageService.createSection(req.body);
    res.status(httpStatus.CREATED).send(user);
  });


module.exports = {
    getSection,
    createSection
  };
  