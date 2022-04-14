const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { pageMetaService } = require('../services');


const getPageMeta = catchAsync(async (req, res) => {
  const pageMeta = await pageMetaService.getPageMeta(req.params.type);
  if (!pageMeta) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta data not found');
  }
  res.send(pageMeta);
});

const listPageMeta = catchAsync(async (req, res) => {
  const pageMetaList = await pageMetaService.listPageMeta();
  if (!pageMetaList) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meta data not found');
  }
    res.send(pageMetaList);
});

const createPageMeta = catchAsync(async (req, res) => {
  const pageMeta = await pageMetaService.createPageMeta(req.body);
  res.status(httpStatus.CREATED).send(pageMeta);
});

const updatePageMeta = catchAsync(async (req, res) => {
  const pageMeta = await pageMetaService.updatePageMeta(req);
  res.status(httpStatus.CREATED).send(pageMeta);
});


module.exports = {
  createPageMeta,
  getPageMeta,
  listPageMeta,
  updatePageMeta
};
  