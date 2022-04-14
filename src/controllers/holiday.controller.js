const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { holidayService } = require('../services');


const getHolidayList = catchAsync(async (req, res) => {
  const holidays = await holidayService.getHolidayList();
  if (!holidays) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No holidays found');
  }
  res.send(holidays);
});

const getHoliday = catchAsync(async (req, res) => {
    const holiday = await holidayService.getHolidayById(req.params.id);
    if (!holiday) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Holiday not found');
    }
    res.send(holiday);
});

const getHolidayByName = catchAsync(async (req,res) => {
  console.log("here")
  const holiday = await holidayService.getHolidayByName(req.params.name);
    if (!holiday) {
      throw new ApiError(httpStatus.NOT_FOUND, 'holiday not found');
    }
    res.send(holiday);
})

const createHoliday = catchAsync(async (req, res) => {
    const holiday = await holidayService.createHoliday(req.body);
    res.status(httpStatus.CREATED).send(holiday);
});

const updateHoliday = catchAsync(async (req, res) => {
  const holiday = await holidayService.updateHoliday(req);
  res.status(httpStatus.CREATED).send(holiday);
});

const createHolidaySection = catchAsync(async (req, res) => {
  const holidaySection = await holidayService.createHolidaySection(req.body);
  res.status(httpStatus.CREATED).send(holidaySection);
});

const getHolidaySections = catchAsync(async (req, res) => {
  const holidaySections = await holidayService.getHolidaySections(req.params.id);
  if (!holidaySections) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Destination Sections not found');
  }
  res.send(holidaySections);
});

const getHolidaySectionsFromName = catchAsync(async (req, res) => {
  const holidaySections = await holidayService.getHolidaySectionsFromName(req.params.name);
  if (!holidaySections) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Destination Sections not found');
  }
  res.send(holidaySections);
});

const getHolidaySection = catchAsync(async (req, res) => {
  const holidaySection = await holidayService.getHolidaySection(req.params.sectionId);
  if (!holidaySection) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Destination Section not found');
  }
  res.send(holidaySection);
});

const updateHolidaySection = catchAsync(async (req, res) => {
  const holidaySection = await holidayService.updateHolidaySection(req);
  res.status(httpStatus.CREATED).send(holidaySection);
});

const getHolidayMeta = catchAsync(async (req, res) => {
  const holidayMeta = await holidayService.getHolidayMeta(req.params.id);
  res.status(httpStatus.CREATED).send(holidayMeta);
});

const getAllHolidaysMeta =  catchAsync(async (req, res) => {
  const holidayMeta = await holidayService.getAllHolidaysMeta(req);
  res.status(httpStatus.CREATED).send(holidayMeta);
});

const deleteHolidaySection = catchAsync(async (req, res) => {
  await holidayService.deleteHolidaySection(req.body.holidayId);
  res.status(httpStatus.CREATED).json({
    msg : "successfully deleted holiday section",
    success : true
  });
})

// const deleteHolidaySubSection = catchAsync(async (req, res) => {
//   await holidayService.deleteHolidaySubSection(req.body.holidayId, req.body.sectionId);
//   res.status(httpStatus.CREATED).json({
//     msg : "successfully deleted holiday sub-section",
//     success : true
//   }); 
// })


module.exports = {
    getHolidayList,
    getHoliday,
    getHolidayByName,
    createHoliday,
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
  