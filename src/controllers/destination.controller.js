const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { destinationService } = require('../services');



const getDestinationList = catchAsync(async (req, res) => {
  const destinations = await destinationService.getDestinationList();
  if (!destinations) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No destination found');
  }
  res.send(destinations);
});

const getDestination = catchAsync(async (req, res) => {
    const destination = await destinationService.getDestinationById(req.params.id);
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


module.exports = {
    getDestinationList,
    getDestination,
    createDestination,
    updateDestination
  };
  