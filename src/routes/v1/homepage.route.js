const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const homepageController = require('../../controllers/homepage.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();


router
  .route('/')
.get(homepageController.getHomePage);
// router.get('/section2', homepageController.getSection2);
// router.get('/section3', homepageController.getSection3);

router
  .route('/create')
.post(homepageController.createHomePage);



router
  .route('/update')
.post(homepageController.updateHomePage);


module.exports = router;

/**
 * @swagger
 * /homepage/create:
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
 *               metatitle:
 *                 type: string
 *               metadescription:
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
 *               background: fake name
 *               title: Hello Holidays
 *               metatitle: ghj
 *               metadescription: hjk
 *               canonical: Here
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
 * /homepage/update:
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
 *               metatitle:
 *                 type: string
 *               metadescription:
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
 *               metatitle: ghj
 *               metadescription: hjk
 *               canonical: Here
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
 * /homepage:
 *   get:
 *     summary: Get Home Page Content & Sections
 *     description: Get the Home Page data
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
 
