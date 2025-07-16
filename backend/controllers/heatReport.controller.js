const connectDB = require('../config/db');

const getGeneralInfo = async (req, res) => {
  try {
    const db = await connectDB();
    const result = await db.query(`
      SELECT TOP 1 
        HEAT_NAME,
        LADLE_OPEN_TIME,
        PLAN_NAME,
        STEEL_GRADE,
        SHIFT_TEAM_NAME
      FROM [CC2PRD].[CCM].[V_REP_HEAT]
      WHERE HEAT_NAME = '25F003353'
    `);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error('❌ Lỗi truy vấn dữ liệu:', err);
    res.status(500).send('Lỗi truy vấn dữ liệu tổng quan');
  }
};

const getGeneralSectionInfo = async (req, res) => {
  try {
    const db = await connectDB();
    const result = await db.query(`
      SELECT TOP(1) 
        CAST_NAME, HEAT_IN_CAST, STEEL_DENSITY_COLD,
        YIELD, BURN_OPEN, HEAT_ABORTED
      FROM [CC2PRD].[CCM].[V_REP_HEAT]
      WHERE HEAT_NAME = '25F003353'
    `);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error('❌ Lỗi truy vấn General Section:', err);
    res.status(500).send('Lỗi truy vấn dữ liệu phần General');
  }
};

module.exports = {
  getGeneralInfo,
  getGeneralSectionInfo
};
