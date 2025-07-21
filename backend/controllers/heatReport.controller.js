const connectDB = require('../config/db');

const getGeneralInfo = async (req, res) => {
  const { heatName } = req.params;  // Lấy heatName từ URL khi gọi API
  try {
    const db = await connectDB();
    const result = await db.query(`
      SELECT TOP 1 
        HEAT_NAME,
        FORMAT (LADLE_OPEN_TIME,'dd/MM/yyyy HH:mm') AS LADLE_OPEN_TIME,
        PLAN_NAME,
        STEEL_GRADE,
        SHIFT_TEAM_NAME
      FROM [CC2PRD].[CCM].[V_REP_HEAT]
      WHERE HEAT_NAME = '${heatName}'
    `);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error('❌ Lỗi truy vấn dữ liệu:', err);
    res.status(500).send('Lỗi truy vấn dữ liệu tổng quan');
  }
};

const getGeneralSectionInfo = async (req, res) => {
  const { heatName } = req.params;  // Lấy heatName từ URL khi gọi API
  try {
    const db = await connectDB();
    const result = await db.query(`
      SELECT TOP(1) 
        CAST_NAME, HEAT_IN_CAST, STEEL_DENSITY_COLD,
        YIELD, BURN_OPEN, HEAT_ABORTED
      FROM [CC2PRD].[CCM].[V_REP_HEAT]
      WHERE HEAT_NAME = '${heatName}'
    `);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error('❌ Lỗi truy vấn General Section:', err);
    res.status(500).send('Lỗi truy vấn dữ liệu phần General');
  }
};

// Phần LADLE Section
const getLadleSectionInfo = async (req, res) => {
  const { heatName } = req.params;
  try {
    const db = await connectDB();
    const result = await db.query(`
      SELECT TOP 1 
        LADLE_NAME, TURRET_ARM
      FROM [CC2PRD].[CCM].[V_REP_HEAT]
      WHERE HEAT_NAME = '${heatName}'
    `);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error('❌ Lỗi truy vấn Ladle Section:', err);
    res.status(500).send('Lỗi truy vấn dữ liệu phần Ladle');
  }
};

// Phần LADLE ARRIVAL Section
const getLadleArrivalInfo = async (req, res) => {
  const { heatName } = req.params;
  try {
    const db = await connectDB();
    const result = await db.query(`
      SELECT TOP(1)
        FORMAT(LADLE_ARRIVE_TIME, 'HH:mm') AS LADLE_ARRIVE_TIME, 
        (TEMP_BEFORE_CASTER - 273.15) AS TEMP_BEFORE_CASTER,
        (STEEL_NET_WEIGHT / 1000) AS STEEL_NET_WEIGHT,
        (LADLE_ARRIVE_WEIGHT /1000) AS LADLE_ARRIVE_WEIGHT,
        (LADLE_TARE_WEIGHT / 1000) AS LADLE_TARE_WEIGHT
      FROM [CC2PRD].[CCM].[V_REP_HEAT]
      WHERE HEAT_NAME = '${heatName}'
    `);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error('❌ Lỗi truy vấn Ladle Arrival:', err);
    res.status(500).send('Lỗi truy vấn dữ liệu phần Ladle Arrival');
  }
};
const getTundishInfo = async (req, res) => {
  const { heatName } = req.params;
  try {
    const db = await connectDB();
    const result = await db.query(`
      SELECT
          h.HEAT_NAME,
          rht.HEAT_COUNTER,
          t.TUNDISH_NAME,
          t.TUNDISH_CAR,
          ROUND(h.TUND_WEIGHT_AT_OPEN / 1000.0, 1) AS TUND_WEIGHT_AT_OPEN_TON,
          ROUND(h.TUND_WEIGHT_AT_CLOSE / 1000.0, 1) AS TUND_WEIGHT_AT_CLOSE_TON
      FROM [CC2PRD].[CCM].[REF_HEAT_TUNDISH] AS rht
      INNER JOIN [CC2PRD].[CCM].[TUNDISH] AS t
          ON rht.TD_INSTALLATION_ID = t.TD_INSTALLATION_ID
      INNER JOIN [CC2PRD].[CCM].[HEAT] AS h
          ON rht.HEAT_ID = h.HEAT_ID
      WHERE h.HEAT_NAME = '${heatName}';
    `);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error('❌ Lỗi truy vấn Tundish:', err);
    res.status(500).send('Lỗi truy vấn dữ liệu phần Tundish');
  }
};
const getShroudInfo = async (req, res) => {
  const { heatName } = req.params;
  try {
    const db = await connectDB();
    const result = await db.query(`
      SELECT
      [HEAT_NAME],
      [SHROUD_TYPE],
      [SHROUD_HEAT_COUNTER]
      FROM [CC2PRD].[CCM].[V_REP_HEAT] WHERE [HEAT_NAME] ='${heatName}'
    `);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error('❌ Lỗi truy vấn Shroud:', err);
    res.status(500).send('Lỗi truy vấn dữ liệu phần Shroud');
  }
};
const getSteelLossInfo = async (req, res) => {
  const { heatName } = req.params;
  try {
    const db = await connectDB();
    const result = await db.query(`
      SELECT 
        h.HEAT_NAME,
        s.HEAT_ID,
        ROUND(s.OTHER_STEEL_LOSS /1000, 3) AS OTHER_STEEL_LOSS,
        ROUND(s.HEAD_CROP_WEIGHT_CUTTED /1000, 3) AS HEAD_CROP_WEIGHT_CUTTED,
        ROUND(s.TAIL_CROP_WEIGHT_CUTTED /1000, 3) AS TAIL_CROP_WEIGHT_CUTTED,
        ROUND(s.TUND_SKULL_WEIGHT /1000, 3) AS TUND_SKULL_WEIGHT,
        ROUND(s.CUT_LOSS_WEIGHT /1000, 3) AS CUT_LOSS_WEIGHT,
        ROUND(s.SAMPLE_WEIGHT /1000, 3) AS SAMPLE_WEIGHT
      FROM 
        [CC2PRD].[CCM].[V_REP_STEEL_LOSS] AS s
      INNER JOIN 
        [CC2PRD].[CCM].[V_REP_HEAT] AS h ON s.HEAT_ID = h.HEAT_ID
      WHERE h.HEAT_NAME = '${heatName}';
    `);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error('❌ Lỗi truy vấn Tundish:', err);
    res.status(500).send('Lỗi truy vấn dữ liệu phần Tundish');
  }
};

module.exports = {
  getGeneralInfo,
  getGeneralSectionInfo,
  getLadleSectionInfo,
  getLadleArrivalInfo,
  getTundishInfo,
  getShroudInfo,
  getSteelLossInfo
};
