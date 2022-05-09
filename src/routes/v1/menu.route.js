const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const menuController = require('../../controllers/menu.controller');
const auth = require('../../middlewares/auth');
const router = express.Router();

 router.route('/getMenuList').get(menuController.getMenuList);
 router.route('/getMenu/:id').get(menuController.getMenuById);
 router.route('/:id').delete(menuController.deleteMenu);
router.route('/createMenu').post(menuController.createMenu);
 router.route('/update').post(menuController.updateMenu);

module.exports = router;