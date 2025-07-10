import React from 'react';

function GeneralSection() {
  return (
    <div className="section">
      <div className="section-title">GENERAL</div>
      <div className="data-grid">
        <div className="data-item"><span className="label">Sequence</span> <span className="value">9</span></div>
        <div className="data-item"><span className="label">Heat in Sequence</span> <span className="value">4</span></div>
        <div className="data-item"><span className="label">Cold Steel Density</span> <span className="value">7,840 kg/m³</span></div>
        <div className="data-item"><span className="label">Yield</span> <span className="value">104.3%</span></div>
        <div className="data-item"><span className="label">Burn Open</span> <span className="value">no</span></div>
        <div className="data-item"><span className="label">Heat Aborted</span> <span className="value">No</span></div>
      </div>
    </div>
  );
}

export default GeneralSection;
