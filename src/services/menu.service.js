const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Menus } = require('../models');


/**
 * 
 * @returns * Get user by id
* @param {ObjectId} id
* @returns {Promise<Menus>}
*/
const getMenuById = async (id) => {
    return await Menus.findById(id);
  };
/**
 * Get List of  page Meta
 * @param {{string}} type
 * @returns {Promise<Menus>}
 */
  const listMenu = async () => {
  return await Menus.find({});
};

/**
 * Create  Meta Data
 * @param {Object} MenuBody
 * @returns {Promise<Menus>}
 */
  const createMenu = async (MenuBody) => {
    return await Menus.create(MenuBody);
  };

// /**
//  * Update Page Meta based on id
//  * @returns {Promise<Menus>}
//  */
//    const updateMenu = async (req) => {
//      const menus = await Menus.findOneAndUpdate( req.body, {new : true, useFindAndModify: false})
//      if (!menus) {
//       throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
//      }
//     return menus;

//     // Object.assign(pageMeta, req.body);
//     // await pageMeta.save();
//   };
  /**
 * Update Destination
 * @returns {Promise<Holiday>}
 */
   const updateMenu = async (req) => {
    const menu = await Menus.findById(req.body.id);
    if (!menu) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Data not found');
    }
    let body = req.body
    delete body['id']
    Object.assign(menu, body);
    await menu.save();
    return menu;
  };

  /**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<Menus>}
 */
const deleteMenuById = async (id) => {
    const menu =  await Menus.findById(id);
    if (!menu) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    await menu.remove();
    return menu;
  };
  
  module.exports = {
    listMenu,
    createMenu,
    updateMenu,
    getMenuById,
    deleteMenuById
  };