const express = require('express');
const router = express.Router();
const heatController = require('../controllers/heatReport.controller');

router.get('/general-info/:heatName', heatController.getGeneralInfo);
router.get('/general-section/:heatName', heatController.getGeneralSectionInfo);
router.get('/ladle-section/:heatName', heatController.getLadleSectionInfo);
router.get('/ladle-arrival/:heatName', heatController.getLadleArrivalInfo);
router.get('/tundish/:heatName', heatController.getTundishInfo);
router.get('/shroud-section/:heatName', heatController.getShroudInfo);

module.exports = router;