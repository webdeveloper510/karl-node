const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const homepageController = require('../../controllers/homepage.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();


router
  .route('/section/:type')
.get(homepageController.getSection);
// router.get('/section2', homepageController.getSection2);
// router.get('/section3', homepageController.getSection3);

router
  .route('/section')
.post(homepageController.createSection);

module.exports = router;

/**
 * @swagger
 * /homepage/section:
 *   post:
 *     summary: Create a section
 *     description: Only admins can create sections.
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
 *                 format: email
 *                 description: must be unique
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
 *                $ref: '#/components/schemas/Section'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /homepage/section/{type}:
 *   get:
 *     summary: Get a Section
 *     description: Get the first section
 *     tags: [Sections]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *         description: Type
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 */
 
