const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const homepageController = require('../../controllers/homepage.controller');
const auth = require('../../middlewares/auth');
const router = express.Router();

router.route('/sections').get(homepageController.listHomePageSections);
router.route('/section/:id').get(homepageController.getHomePageSection);
router.route('/createSection').post(homepageController.createHomePageSection);
router.route('/updateSection').post(homepageController.updateHomePageSection);
router.route('/destinations').post(homepageController.showHomePageDestionation);
router.route('/holidays').post(homepageController.showHomePageHolidays);
// router.get('/section2', homepageController.getSection2);
// router.get('/section3', homepageController.getSection3);


module.exports = router;

/**
 * @swagger
 * /homepage/createSection:
 *   post:
 *     summary: Create Home Page content
 *     description: Only admins can create Home page data.
 *     tags: [Sections]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               background:
 *                 type: string
 *               title:
 *                 type: string
 *               description1:
 *                 type: string
 *               type:
 *                 type: string
 *               description2:
 *                  type: string
 *               sections:
 *                  type: array
 *             example:
 *               background: fake name
 *               title: Hello Holidays
 *               type: section1
 *               description1: Save up to £750 per person on selected holidays to Greece, Spain, Portugal & Italy
 *               description2: Great deals, with a price match promise & deposits from £30, say hello to holidays that make you smile
 *               sections: [{title,description,image,percentage}]
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/HomePage'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /homepage/updateSection:
 *   post:
 *     summary: Update Home Page content
 *     description: Only admins can update Home page data.
 *     tags: [Sections]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *               background:
 *                 type: string
 *               title:
 *                 type: string
 *               description1:
 *                 type: string
 *               type:
 *                 type: string
 *               description2:
 *                  type: string
 *               sections:
 *                  type: array
 *             example:
 *               id: 34534534634634
 *               background: fake name
 *               title: Hello Holidays
 *               type: section1
 *               description1: Save up to £750 per person on selected holidays to Greece, Spain, Portugal & Italy
 *               description2: Great deals, with a price match promise & deposits from £30, say hello to holidays that make you smile
 *               sections: [{title,description,image,percentage}]
 *     responses:
 *       "201":
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/HomePage'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /homepage/section/{id}:
 *   get:
 *     summary: Get Home Page Content & Sections
 *     description: Get the Home Page data
 *     tags: [Sections]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description:  id of section on homepage
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/HomePage'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 */


/**
 * @swagger
 * /homepage/sections:
 *   get:
 *     summary: Get All Home Page Sections
 *     description: Get all the home Page sections
 *     tags: [Sections]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/HomePage'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 */


/**
 * @swagger
 * /homepage/destinations:
 *   post:
 *     summary: Homepage destinations
 *     description: Show destination data if showOnDashboard is true
 *     tags: [Sections]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               background:
 *                 type: string
 *               title:
 *                 type: string
 *               description1:
 *                 type: string
 *               type:
 *                 type: string
 *               description2:
 *                  type: string
 *               sections:
 *                  type: array
 *             example:
 *               background: fake name
 *               title: Hello Holidays
 *               type: section1
 *               description1: Save up to £750 per person on selected holidays to Greece, Spain, Portugal & Italy
 *               description2: Great deals, with a price match promise & deposits from £30, say hello to holidays that make you smile
 *               shownOnDashboard : true 
 *     responses:
 *       "201":
 *         description: Data Fetched
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/HomePage'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /homepage/holidays:
 *   post:
 *     summary: Homepage holidays
 *     description: Show holidays data if showOnDashboard is true
 *     tags: [Sections]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               background:
 *                 type: string
 *               title:
 *                 type: string
 *               description1:
 *                 type: string
 *               type:
 *                 type: string
 *               description2:
 *                  type: string
 *               sections:
 *                  type: array
 *             example:
 *               background: fake name
 *               title: Hello Holidays
 *               type: section1
 *               description1: Save up to £750 per person on selected holidays to Greece, Spain, Portugal & Italy
 *               description2: Great deals, with a price match promise & deposits from £30, say hello to holidays that make you smile
 *               shownOnDashboard : true
 *     responses:
 *       "201":
 *         description: Data Fetched
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/HomePage'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */