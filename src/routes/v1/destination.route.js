const express = require('express');
const validate = require('../../middlewares/validate');
const authValidation = require('../../validations/auth.validation');
const destinationController = require('../../controllers/destination.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();



router
  .route('/list')
.get(destinationController.getDestinationList);


router
  .route('/:id')
.get(destinationController.getDestination);
// router.get('/section2', homepageController.getSection2);
// router.get('/section3', homepageController.getSection3);

router
  .route('/name/:name')
.get(destinationController.getDestinationByName);


router
  .route('/:id/sections')
.get(destinationController.getDestinationSections);


router
  .route('/:name/sectionsByName')
.get(destinationController.getDestinationSectionsFromName);


router
  .route('/section/:sectionId')
.get(destinationController.getDestinationSection);


router
  .route('/addsection')
.post(destinationController.createDestinationSection);

router
  .route('/create')
.post(destinationController.createDestination);


router
  .route('/update')
.post(destinationController.updateDestination);


router
  .route('/updateSection')
.post(destinationController.updateDestinationSection);
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
 *               slides: ['https://picsum.photos/id/1015/1000/400/']
 *               metattitle: testing
 *               metadescription: testing desc
 *               canonical: url
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
 * /destination/addsection:
 *   post:
 *     summary: Create a Destination Section
 *     description: Only admins can create Destination Sction.
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
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               percentage:
 *                 type: string
 *               type:
 *                 type: string
 *               destination:
 *                 type: string
 *               sections:
 *                 type: array
 *             example:
 *               slides: ['https://picsum.photos/id/1015/1000/400/']
 *               title: testing
 *               description: testing desc
 *               image: url
 *               percentage: 50
 *               type: testing
 *               destination: 45345345345
 *               sections: [{title,description,image,percentage,type}]
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


/**
 * @swagger
 * /destination/name/{name}:
 *   get:
 *     summary: Get a Destination
 *     description: Get the detail of  destination
 *     tags: [Destinations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           name: string
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



/**
 * @swagger
 * /destination/list:
 *   get:
 *     summary: Get All destinations
 *     description: Get list of all the destinations
 *     tags: [Destinations]
 *     security:
 *       - bearerAuth: []
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


/**
 * @swagger
 * /destination/{id}/sections:
 *   get:
 *     summary: Get all sections of a destination
 *     description:  Get all sections of a destination
 *     tags: [Destinations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           id: string
 *         description: id
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


/**
 * @swagger
 * /destination/{name}/sectionsByName:
 *   get:
 *     summary: Get all sections of a destination
 *     description:  Get all sections of a destination
 *     tags: [Destinations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           name: string
 *         description: name
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



/**
 * @swagger
 * /destination/section/{sectionId}:
 *   get:
 *     summary: Get a section of a destination
 *     description:  Get a section of a destination
 *     tags: [Destinations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sectionId
 *         required: true
 *         schema:
 *           sectionId: string
 *         description: sectionId
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


/**
 * @swagger
 * /destination/updateSection:
 *   post:
 *     summary: Update a Destination Section
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
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               percentage: 
 *                 type: string
 *               type:
 *                 type: string
 *               destination:
 *                 type: string
 *               sections:
 *                 type: array
 *             example:
 *               id: 345345346356
 *               title: sdf
 *               slides: ['https://picsum.photos/id/1015/1000/400/']
 *               description: Ibiza
 *               image: testing
 *               percentage: 50
 *               type: section
 *               destination: string
 *               sections: [{title,description,image,percentage,type}]
 *     responses:
 *       "201":
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
 