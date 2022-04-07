const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const homepageRoute = require('./homepage.route');
const destinationRoute = require('./destination.route');
const holidayRoute = require('./holiday.route');
const pageMetaRoute = require('./pagemeta.route');
const uploadFile = require('./uploadFile.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
	{
		path:'/docs',
		route:docsRoute
	},
  {
    path: '/homepage',
    route: homepageRoute,
  },
  {
    path: '/destination',
    route: destinationRoute,
  },
  {
    path: '/holiday',
    route: holidayRoute,
  },
  {
    path: '/pagemeta',
    route: pageMetaRoute,
  },
  {
    path: '/upload',
    route: uploadFile
  }
];

//const devRoutes = [
  // routes available only in development mode
 // {
   // path: '/docs',
   // route: docsRoute,
 // },
//];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
//if (config.env === 'development') {
 // devRoutes.forEach((route) => {
   // router.use(route.path, route.route);
 // });
//}

module.exports = router;
