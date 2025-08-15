import React from 'react';
import './AnalysisDataSection.css';

const columns = [
  { key: 'sample', label: 'Sample' },
  { key: 'time', label: 'Time' },
  { key: 'peri', label: 'Peri' },
  { key: 'C', label: 'C [%]' },
  { key: 'Mn', label: 'Mn [%]' },
  { key: 'P', label: 'P [%]' },
  { key: 'S', label: 'S [%]' },
  { key: 'Si', label: 'Si [%]' },
  { key: 'Cu', label: 'Cu [%]' },
  { key: 'Ni', label: 'Ni [%]' },
  { key: 'Cr', label: 'Cr [%]' },
  { key: 'Al', label: 'Al [%]' },
  { key: 'Mo', label: 'Mo [%]' },
  { key: 'Sn', label: 'Sn [%]' },
  { key: 'Nb', label: 'Nb [%]' },
  { key: 'V', label: 'V [%]' },
  { key: 'Ti', label: 'Ti [%]' },
  { key: 'B', label: 'B [%]' },
  { key: 'Ca', label: 'Ca [%]' },
  { key: 'N', label: 'N [%]' },
];

const limits = {
  C: { min: 0.17, max: 0.21 },
  Mn: { min: 0.7, max: 0.8 },
  P: { min: 0.01, max: 0.02 },
  S: { min: 0.004, max: 0.008 },
  Si: { min: 0.015, max: 0.03 },
  Cu: { min: 0.04, max: 0.08 },
  Ni: { min: 0.04, max: 0.08 },
  Cr: { min: 0.04, max: 0.08 },
  Al: { min: 0.025, max: 0.04 },
  Ca: { min: 0.0, max: 0.0035 },
  N: { min: 0.004, max: 0.008 },
};

const data = [
  { sample: 'MIN', C: 0.1700, Mn: 0.7000, P: 0.0100, S: 0.0040, Si: 0.0150, Cu: 0.0400, Ni: 0.0400, Cr: 0.0400, Al: 0.0250, Ca: 0.0025, N: 0.0040 },
  { sample: 'AIM', C: 0.1900, Mn: 0.7500, P: 0.0100, S: 0.0040, Si: 0.0150, Cu: 0.0400, Ni: 0.0400, Cr: 0.0400, Al: 0.0250, Ca: 0.0025, N: 0.0040 },
  { sample: 'MAX', C: 0.2100, Mn: 0.8000, P: 0.0200, S: 0.0080, Si: 0.0300, Cu: 0.0800, Ni: 0.0800, Cr: 0.0800, Al: 0.0400, Ca: 0.0035, N: 0.0080 },
  { sample: 'CCM-3', time: '15:56', peri: false, C: 0.1973, Mn: 0.7495, P: 0.0120, S: 0.0067, Si: 0.0082, Cu: 0.0183, Ni: 0.0169, Cr: 0.0374, Al: 0.0222, Ca: '', N: 0.0016 },
  { sample: 'CCM-2', time: '15:35', peri: false, C: 0.1833, Mn: 0.7502, P: 0.0092, S: 0.0039, Si: 0.0095, Cu: 0.0170, Ni: 0.0175, Cr: 0.0355, Al: 0.0274, Ca: '', N: 0.0029 },
  { sample: 'CCM-1', time: '15:06', peri: false, C: 0.1820, Mn: 0.7420, P: 0.0090, S: 0.0060, Si: 0.0080, Cu: 0.0200, Ni: 0.0160, Cr: 0.0410, Al: 0.0262, Ca: '', N: 0.0021 },
  { sample: 'LF-3', time: '15:05', peri: false, C: 0.1825, Mn: 0.7425, P: 0.0094, S: 0.0058, Si: 0.0077, Cu: 0.0186, Ni: 0.0157, Cr: 0.0415, Al: 0.0262, Ca: '', N: 0.0021 },
  { sample: 'LF-2', time: '14:58', peri: false, C: 0.1803, Mn: 0.7184, P: 0.0106, S: 0.0092, Si: 0.0063, Cu: 0.0185, Ni: 0.0164, Cr: 0.0347, Al: 0.0302, Ca: '', N: 0.0003 },
  { sample: 'LF-1', time: '14:46', peri: true, C: 0.1544, Mn: 0.6469, P: 0.0112, S: 0.0062, Si: 0.0183, Cu: 0.0164, Ni: 0.0402, Cr: 0.0342, Al: 0.0342, Ca: '', N: 0.0018 },
  { sample: 'BOF-2', time: '13:54', peri: true, C: 0.1276, Mn: 0.5935, P: 0.0086, S: 0.0158, Si: 0.0057, Cu: 0.0183, Ni: 0.0157, Cr: 0.0398, Al: 0.0142, Ca: '', N: 0.0005 },
  { sample: 'BOF-1', time: '13:40', peri: false, C: 0.0384, Mn: 0.0588, P: 0.0097, S: 0.0148, Si: 0.0014, Cu: 0.0179, Ni: 0.0148, Cr: 0.0356, Al: 0.5048, Ca: '', N: 0.0004 },
];

function isOutOfLimit(key, value) {
  if (!limits[key] || value === '' || value === undefined) return false;
  return value < limits[key].min || value > limits[key].max;
}

export default function AnalysisDataSection() {
  return (
    <div className="analysis-section">
      <div className="section-title">ANALYSIS DATA</div>
      <div className="table-scroll">
        <table className="analysis-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {columns.map(col => (
                  <td
                    key={col.key}
                    className={isOutOfLimit(col.key, row[col.key]) ? 'cell-out' : ''}
                  >
                    {col.key === 'peri'
                      ? (
                        <input
                          type="checkbox"
                          checked={!!row.peri}
                          readOnly
                          style={{ pointerEvents: 'none', accentColor: '#e86c1a' }}
                        />
                      )
                      : (row[col.key] !== undefined ? row[col.key] : '')
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