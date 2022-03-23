const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const destinationController = require('../../controllers/destination.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();


router
  .route('/:id')
.get(destinationController.getDestination);
// router.get('/section2', homepageController.getSection2);
// router.get('/section3', homepageController.getSection3);

router
  .route('/create')
.post(destinationController.createDestination);


router
  .route('/update')
.post(destinationController.updateDestination);

module.exports = router;

/**
 * @swagger
 * /destination/create:
 *   post:
 *     summary: Create a Destination
 *     description: Only admins can create Destination.
 *     tags: [Destinations]
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
 *               metatitle: ghj
 *               metadescription: hjk
 *               canonical: Here
 *               title:
 *                 type: string
 *               slides:
 *                 type: array
 *               type:
 *                 type: string
 *               sections:
 *                 type: array
 *             example:
 *               slides: ['https://picsum.photos/id/1015/1000/400/']
 *               title: Ibiza
 *               type: testing
 *               sections: [{title,description,image,percentage,type}]
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Destination'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /destination/update:
 *   post:
 *     summary: Update a Destination
 *     description: Only admins can update Destination.
 *     tags: [Destinations]
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
 *               canonical: 
 *                 type: string
 *               title:
 *                 type: string
 *               slides:
 *                 type: array
 *               type:
 *                 type: string
 *               sections:
 *                 type: array
 *             example:
 *               id: 345345346356
 *               slides: ['https://picsum.photos/id/1015/1000/400/']
 *               title: Ibiza
 *               type: testing
 *               sections: [{title,description,image,percentage,type}]
 *     responses:
 *       "201":
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Destination'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */


/**
 * @swagger
 * /destination/{id}:
 *   get:
 *     summary: Get a Destination
 *     description: Get the detail of  destination
 *     tags: [Destinations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id: string
 *         description: Type
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Destination'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 */
 
