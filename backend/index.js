const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = 5000;

// Cho phép frontend gọi API
app.use(cors());

// Cấu hình kết nối SQL Server
const dbConfig = {
  user: 'sa',
  password: '123456',
  server: 'localhost',      
  database: 'CC2PRD',
  options: {
    encrypt: false,          
    trustServerCertificate: true,
  }
};

// API lấy dữ liệu heat report
app.get('/api/heat-report', async (req, res) => {
  try {
    await sql.connect(dbConfig);
    const result = await sql.query(`
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
    console.error('Lỗi truy vấn:', err);
    res.status(500).send('Lỗi truy vấn CSDL');
  }
});

app.listen(port, () => {
  console.log(`✅ Backend đang chạy tại http://localhost:${port}`);
});


