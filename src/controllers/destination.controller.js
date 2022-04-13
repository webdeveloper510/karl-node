const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { destinationService } = require('../services');


const getDestinationList = catchAsync(async (req, res) => {
  let filter = {};
  if (req.query) {
    filter = {...req.query};
  } else {
    filter = {}
  }
  const destinations = await destinationService.getDestinationList(filter);
  if (!destinations) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No destination found');
  }
  res.send(destinations);
});

const getDestination = catchAsync(async (req, res) => {
    let destination = await destinationService.getDestinationById(req.params.id);
    // const newSlides = destination.slides.filter(dest => dest !== '');
    // console.log(newSlides)
    if (!destination) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Destination not found');
    }
    res.send(destination);
});

const getDestinationByName = catchAsync(async (req,res)=> {
  const destination = await destinationService.getDestinationByName(req.params.name);
    if (!destination) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Destination not found');
    }
    res.send(destination);
});

const createDestination = catchAsync(async (req, res) => {
    const destination = await destinationService.createDestination(req.body);
    res.status(httpStatus.CREATED).send(destination);
  });

const updateDestination = catchAsync(async (req, res) => {
  const destination = await destinationService.updateDestination(req);
  res.status(httpStatus.CREATED).send(destination);
});

const createDestinationSection = catchAsync(async (req, res) => {
  console.log('yes i am ');
  //const destinationSection = await destinationService.createDestinationSection(req.body);
  // res.status(httpStatus.CREATED).send(destinationSection);
});

const getDestinationSections = catchAsync(async (req, res) => {
  const destinationSections = await destinationService.getDestinationSections(req.params.id);
  if (!destinationSections) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Destination Sections not found');
  }
  res.send(destinationSections);
});

const getDestinationSectionsFromName = catchAsync(async (req, res) => {
  const destinationSections = await destinationService.getDestinationSectionsFromName(req.params.name);
  if (!destinationSections) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Destination Sections not found');
  }
  res.send(destinationSections);
});

const getDestinationSection = catchAsync(async (req, res) => {
  const destinationSection = await destinationService.getDestinationSection(req.params.sectionId);
  if (!destinationSection) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Destination Section not found');
  }
  res.send(destinationSection);
});

const updateDestinationSection = catchAsync(async (req, res) => {
  const destinationSection = await destinationService.updateDestinationSection(req);
  res.status(httpStatus.CREATED).send(destinationSection);
});

const getDestinationMeta = catchAsync(async (req, res) => {
  const destinationMeta = await destinationService.getDestinationMeta(req.params.id);
  res.status(httpStatus.CREATED).send(destinationMeta);
})

const getAllDestinationMeta = catchAsync(async (req, res) => {
  console.log(1)
  const destinationMeta = await destinationService.getAllDestinationMeta(req);
  res.status(httpStatus.CREATED).send(destinationMeta);
})


module.exports = {
    getDestinationList,
    getDestination,
    getDestinationByName,
    createDestination,
    updateDestination,
    getDestinationSectionsFromName,
    createDestinationSection,
    getDestinationSections,
    getDestinationSection,
    updateDestinationSection,
    getDestinationMeta,
    getAllDestinationMeta
  };
  