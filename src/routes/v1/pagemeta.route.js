const express = require('express');
const pageMetaController = require('../../controllers/pagemeta.controller');
const router = express.Router();

router.route('/list').get(pageMetaController.listPageMeta);
router.route('/:type').get(pageMetaController.getPageMeta);
router.route('/createMeta').post(pageMetaController.createPageMeta);
router.route('/updateMeta').post(pageMetaController.updatePageMeta);
// router.get('/section2', homepageController.getSection2);
// router.get('/section3', homepageController.getSection3);

module.exports = router;
/**
 * @swagger
 * /pagemeta/createMeta:
 *   post:
 *     summary: Create Meta data
 *     description: Only admins can create Meta data.
 *     tags: [PageMeta]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - metaTitle
 *               - metaDescription
 *               - canonical
 *               - type
 *             properties:
 *               metaTitle:
 *                 type: string
 *               metaDescription:
 *                 type: string
 *               type:
 *                 type: string
 *               canonical:
 *                 type: string
 *             example:
 *               type: homepage
 *               metaTitle: Hello Holidays
 *               metaDescription: Save up to £750 per person on selected holidays to Greece, Spain, Portugal & Italy
 *               canonical: Save up to £750 per person on selected holidays to Greece, Spain, Portugal & Italy
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/PageMeta'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /pagemeta/updateMeta:
 *   post:
 *     summary: Update Meta data
 *     description: Only admins can update Meta data.
 *     tags: [PageMeta]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - metaTitle
 *               - metaDescription
 *               - canonical
 *               - type
 *               - id
 *             properties:
 *               metaTitle:
 *                 type: string
 *               metaDescription:
 *                 type: string
 *               type:
 *                 type: string
 *               canonical:
 *                 type: string
 *               id:
 *                 type: string
 *             example:
 *               id: 345345345345345345
 *               metaTitle: Hello Holidays
 *               metaDescription: Save up to £750 per person on selected holidays to Greece, Spain, Portugal & Italy
 *               canonical: Save up to £750 per person on selected holidays to Greece, Spain, Portugal & Italy
 *     responses:
 *       "201":
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/PageMeta'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /pagemeta/{type}:
 *   get:
 *     summary: Get Meta Data by type
 *     description: Get Meta Data by type
 *     tags: [PageMeta]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *         description:  type of meta data page
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/PageMeta'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 */

/**
 * @swagger
 * /pagemeta/list:
 *   get:
 *     summary: Get All Meta Data List
 *     description: Get all the list of Page Meta
 *     tags: [PageMeta]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/PageMeta'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 */



 
