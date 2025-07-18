import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SteelLossSection() {

  return (
    <div className="section steel-loss-section">
      <div className="section-title">STEEL LOSS</div>
      <div className="data-grid">
        <div className="data-item"><span className="label">Tundish Skull</span> <span className="value">t</span></div>
        <div className="data-item"><span className="label">Head Crop</span> <span className="value">t</span></div>
        <div className="data-item"><span className="label">Tail Crop</span> <span className="value">t</span></div>
        <div className="data-item"><span className="label">Sample</span> <span className="value">t</span></div>
        <div className="data-item"><span className="label">Cut Loss</span> <span className="value">t</span></div>
        <div className="data-item"><span className="label">Other Loss</span> <span className="value">t</span></div>
      </div>
    </div>
  );
}

export default SteelLossSection;

