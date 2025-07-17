const express = require('express');
const router = express.Router();
const heatController = require('../controllers/heatReport.controller');

router.get('/general', heatController.getGeneralInfo);
router.get('/general-section', heatController.getGeneralSectionInfo);
router.get('/ladle-section', heatController.getLadleSectionInfo);
router.get('/ladle-arrival', heatController.getLadleArrivalInfo);


module.exports = router;