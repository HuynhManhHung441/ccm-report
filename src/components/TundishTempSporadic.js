import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TundishTempSporadic.css';

function TundishTempSporadic({ heatName }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Gọi API để lấy dữ liệu Tundish Temp Sporadic cho heatName
//     axios
//       .get(`http://localhost:5000/api/heat-report/tundish-temp-sporadic/${heatName}`)
//       .then((res) => setData(res.data)) // API trả về mảng các bản ghi (time, temp...)
//       .catch((err) => console.error('Lỗi gọi API Tundish Temp Sporadic:', err));
//   }, [heatName]);

//   if (!data || data.length === 0) {
//     return (
//       <div className="tundish-temp-section">
//         <div className="tundish-temp-title">TUNDISH TEMP (SPORADIC)</div>
//         <div>Đang tải dữ liệu...</div>
//       </div>
//     );
//   }

  return (
    <div className="tundish-temp-section">
      {/* Tiêu đề */}
      <div className="tundish-temp-title">TUNDISH TEMP (SPORADIC)</div>

      {/* Bảng dữ liệu */}
      <table className="tundish-temp-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Temp <br/>[°C]</th>
            <th>S.Heat <br/>[°C]</th>
            <th>Liqu Temp <br/>[°C]</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>15:26</td>
              <td>15:26</td>
              <td>15:26</td>
              <td>15:26</td>
            </tr>
            <tr>
              <td>15:26</td>
              <td>15:26</td>
              <td>15:26</td>
              <td>15:26</td>
            </tr>
        
        </tbody>
      </table>
    </div>
  );
}

export default TundishTempSporadic;
