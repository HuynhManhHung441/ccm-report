import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StrandDataSection.css';
function StrandData({ heatName }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/heat-report/strand-data-section/${heatName}`)
      .then(res => {
        console.log('✅ RESPONSE DATA:', res.data);
        setData(res.data)})
      .catch(err => console.error('Lỗi gọi STRAND DATA:', err));
  }, [heatName]);
  
  return (
    <div className="strand-data-section">
      <div className="section-title">STRAND DATA</div>
      <table className="strand-data-table">
        <colgroup>
          <col className="col-strand" />
          <col className="col-mold" />
          <col className="col-format" />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th rowSpan="2">Strand</th>
            <th rowSpan="2">Mold</th>
            <th rowSpan="2">Format [mm]</th>
            <th colSpan="2">Powder</th>
            <th colSpan="2">SEN</th>
            <th colSpan="2">Strand Length [m]</th>
            <th colSpan="4">Cast</th>
          </tr>
          <tr>
            <th>Type</th>
            <th>Amount [kg]</th>
            <th>Type</th>
            <th>Counter</th>
            <th>Start</th>
            <th>End</th>
            <th>Start</th>
            <th>End</th>
            <th>Dur. [min]</th>
            <th>Avg speed [m/min]</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
              <tr key={index}>
                <td>{row.STRAND_NAME}</td>
                <td>{row.MOLD_NAME}</td>
                <td>{row.FORMAT}</td>
                <td>{row.CASTING_POWDER_NAME}</td>
                <td>{row.CASTING_POWDER_AMOUNT}</td>
                <td>{row.SEN_TYPE}</td>
                <td>{row.SEN_HEAT_COUNTER}</td>
                <td>157.88</td>
                <td>212.36</td>
                <td>15:43</td>
                <td>16:28</td>
                <td>45</td>
                <td>1.20</td>
              </tr>
          ))}
        </tbody>
      </table>

      <table className="strand-data-table">
        <colgroup>
          <col className="col-strand" />
          <col className="col-mold" />
          <col className="col-format" />
          <col className="col-practice"/>
          <col className="col-practice"/>
          <col className="col-practice"/>
          <col className="col-practice"/>
        </colgroup>

        <thead>
          <tr>
            <th rowSpan="2">Strand</th>
            <th rowSpan="2">Mold</th>
            <th rowSpan="2">Format [mm]</th>
            <th colSpan="4">Practices</th>
          </tr>
          <tr>
            <th>Cooling</th>
            <th>Osci</th>
            <th>Gap</th>
            <th>Mold Level Control</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
              <tr>
                <td>{row.STRAND_NAME}</td>
                <td>{row.MOLD_NAME}</td>
                <td>{row.FORMAT}</td>
                <td>MedC_Hard</td>
                <td>Table 1</td>
                <td>230_MedC</td>
                <td>Anti bulging</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StrandData;
