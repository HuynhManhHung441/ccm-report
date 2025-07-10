import React from 'react';
import './App.css';

import GeneralSection from './components/GeneralSection';
import LadleSection from './components/LadleSection';
import LadleArrivalSection from './components/LadleArrivalSection';
import TundishSection from './components/TundishSection';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="heat-title">HEAT REPORT CCM2-HRC2</h1>
        <img src="/assets/images/LogoGangThepBlue.png" alt="Hòa Phát Logo" className="logo" />
      </div>

      {/* Thông tin tổng quan */}
      <div className="info-grid">
        <div><span className="label">Heat:</span> <span className="value">25F003353</span></div>
        <div><span className="label">Prod. Date:</span> <span className="value">28/06/2025 15:35</span></div>
        <div><span className="label">Plan:</span> <span className="value">P04606</span></div>
        <div><span className="label">Steel Grade:</span> <span className="value">S275JR-2</span></div>
        <div><span className="label">Shift:</span> <span className="value">A</span></div>
        <div><span className="label">Foreman:</span> <span className="value"></span></div>
      </div>

      {/* Các phần báo cáo */}
      <div className="section-row">
        <GeneralSection />
        <LadleSection />
        <LadleArrivalSection />
        <TundishSection />
      </div>
    </div>
  );
}

export default App;
