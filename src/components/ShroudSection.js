import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ShroudSection() {

  return (
    <div className="section shroud-section">
      <div className="section-title">SHROUD</div>
      <div className="data-grid">
        <div className="data-item"><span className="label">Type</span> <span className="value">_</span></div>
        <div className="data-item"><span className="label"> Heat Counter</span> <span className="value">_</span></div>
      </div>
    </div>
  );
}

export default ShroudSection;

