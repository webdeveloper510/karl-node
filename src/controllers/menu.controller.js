const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { menuService } = require('../services');

const createMenu = catchAsync(async (req, res) => {
  const user = await menuService.createMenu(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getMenuList = catchAsync(async (req, res) => {
    let filter = {};
    if (req.query) {
      filter = {...req.query};
    } else {
      filter = {}
    }
    const menus = await menuService.listMenu(filter);
    if (!menus) {
      throw new ApiError(httpStatus.NOT_FOUND, 'No destination found');
    }
    res.send(menus);
  });

const getMenuById= catchAsync(async (req, res) => {
  const menu = await menuService.getMenuById(req.params.id);
  console.log(menu)
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(menu);
});

const updateMenu = catchAsync(async (req, res) => {
  console.log(req.body)
  const menu = await menuService.updateMenu(req);
  res.send(menu);
});

const deleteMenu = catchAsync(async (req, res) => {
    console.log(req)
  await menuService.deleteMenuById(req.params.id);
  res.status(httpStatus.OK).json({msg : "successfully deleted", success : true});
});

module.exports = {
  createMenu,
  getMenuList,
  getMenuById,
  updateMenu,
  deleteMenu,
};
