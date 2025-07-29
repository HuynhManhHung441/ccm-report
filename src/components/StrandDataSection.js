import React from 'react';
import './StrandDataSection.css';

function StrandData() {
  return (
    <div className="strand-data-section">
      <div className="section-title">STRAND DATA</div>

      {/* Bảng 1: Powder, SEN, Strand Length, Cast */}
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
          <tr>
            <td>3</td>
            <td>11</td>
            <td>230 x 1541</td>
            <td>WS P-10N</td>
            <td>0.0</td>
            <td>2 Hole (15° down)</td>
            <td>4</td>
            <td>157.88</td>
            <td>212.36</td>
            <td>15:43</td>
            <td>16:28</td>
            <td>45</td>
            <td>1.20</td>
          </tr>
          <tr>
            <td>4</td>
            <td>10</td>
            <td>230 x 1541</td>
            <td>WS P-10N</td>
            <td>0.0</td>
            <td>2 Hole (15° down)</td>
            <td>4</td>
            <td>158.30</td>
            <td>212.77</td>
            <td>15:43</td>
            <td>16:28</td>
            <td>45</td>
            <td>1.20</td>
          </tr>
        </tbody>
      </table>

      {/* Bảng 2: Practices */}
      <table className="strand-data-table">
        <colgroup>
          <col className="col-strand" />
          <col className="col-mold" />
          <col className="col-format" />
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
          <tr>
            <td>3</td>
            <td>11</td>
            <td>230 x 1541</td>
            <td>MedC_Hard</td>
            <td>Table 1</td>
            <td>230_MedC</td>
            <td>Anti bulging</td>
          </tr>
          <tr>
            <td>4</td>
            <td>10</td>
            <td>230 x 1541</td>
            <td>MedC_Hard</td>
            <td>Table 1</td>
            <td>230_MedC</td>
            <td>Anti bulging</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StrandData;
