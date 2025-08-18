import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AnalysisDataSection.css';

function formatValue(val) {
  if (val === null || val === undefined || val === '') return '';
  if (typeof val === 'number') {
    return Number(val).toFixed(4);
  }
  return val;
}

export default function AnalysisDataSection({ heatName }) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

//   const handleDownload = () => {
//     const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `analysis-data-${heatName}.json`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/heat-report/analysis-data-section/${heatName}`)
      .then(res => {
        setData(res.data);
        if (res.data && res.data.length > 0) {
          // Lấy tất cả key, loại bỏ HEAT_NAME nếu có
          const keys = Object.keys(res.data[0]).filter(k => k !== 'HEAT_NAME');
          setColumns(keys);
        }
      })
      .catch(err => console.error('Lỗi gọi ANALYSIS DATA:', err));
  }, [heatName]);

  return (
    <div className="analysis-section">
      <div className="section-title">
        ANALYSIS DATA
        {/* <button style={{float: 'right', fontSize: 12}} onClick={handleDownload}>Tải JSON</button> */}
      </div>
      <div className="table-scroll">
        <table className="analysis-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th className="label" key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {columns.map(col => (
                  <td key={col}>
                    {col.toLowerCase() === 'peri'
                      ? (
                        <input
                          type="checkbox"
                          checked={!!row[col]}
                          readOnly
                          style={{ pointerEvents: 'none', accentColor: '#e8e5e5ff' }}
                        />
                      )
                      : formatValue(row[col])
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}