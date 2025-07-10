import React from 'react';

function LadleArrivalSection() {
  return (
    <div className="section">
      <div className="section-title">LADLE ARRIVAL</div>
      <div className="data-grid">
        <div className="data-item"><span className="label">Time</span> <span className="value">15:19</span></div>
        <div className="data-item"><span className="label">Temperature</span> <span className="value">1,563°C</span></div>
        <div className="data-item"><span className="label">Start Net Weight</span> <span className="value">287.0 t</span></div>
        <div className="data-item"><span className="label">Start Gross Weight</span> <span className="value">422.0 t</span></div>
        <div className="data-item"><span className="label">Ladle Tare Weight</span> <span className="value">135.0 t</span></div>
      </div>
    </div>
  );
}

export default LadleArrivalSection;
