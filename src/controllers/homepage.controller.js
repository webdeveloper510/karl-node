const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { homePageService } = require('../services');

const getHomePage = catchAsync(async (req, res) => {
    const homepage = await homePageService.getHomePage();
    if (!homepage) {
      throw new ApiError(httpStatus.NOT_FOUND, 'HomePage data not found');
    }
    res.send(homepage);
});

const createHomePage = catchAsync(async (req, res) => {
    const homepage = await homePageService.createHomePage(req.body);
    res.status(httpStatus.CREATED).send(homepage);
  });

const updateHomePage = catchAsync(async (req, res) => {
  const homepage = await homePageService.updateHomePage(req);
  res.status(httpStatus.CREATED).send(homepage);
});


module.exports = {
  getHomePage,
  createHomePage,
  updateHomePage
  };
  