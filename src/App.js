import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import GeneralSection from './components/GeneralSection';
import LadleSection from './components/LadleSection';
import LadleArrivalSection from './components/LadleArrivalSection';
import TundishSection from './components/TundishSection';
import ShroudSection from './components/ShroudSection';
import SteelLossSection from './components/SteelLossSection';
import OperatorCommentSection from './components/OperatorCommentSection';
import LadleDepartureSection from './components/LadleDepartureSection';
import TundishMaterialSection from './components/TundishMaterialSection';
import TundishTempSporadic from './components/TundishTempSporadic';
import TundishTempContinuous from './components/TundishTempContinuous';
import StrandDataSection from './components/StrandDataSection';

function App() {
  const [info, setInfo] = useState(null);
  const heatName = '25F003335';
  useEffect(() => {
    // Gọi API lấy dữ liệu phần Header
    axios.get(`http://localhost:5000/api/heat-report/general-info/${heatName}`)
      .then(res => setInfo(res.data))
      .catch(err => console.error('❌ Lỗi gọi API:', err));
  }, [heatName]);

  if (!info) return <div>Đang tải dữ liệu...</div>;
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="heat-title">HEAT REPORT CCM2-HRC2</h1>
        <img src="/assets/images/LogoGangThepBlue.png" alt="Hòa Phát Logo" className="logo" />
      </div>

      <div className="info-grid">
        <div><span className="label">Heat:</span> <span className="value">{info.HEAT_NAME}</span></div>
        <div><span className="label">Prod. Date:</span> <span className="value">{info.LADLE_OPEN_TIME}</span></div>
        <div><span className="label">Plan:</span> <span className="value">{info.PLAN_NAME}</span></div>
        <div><span className="label">Steel Grade:</span> <span className="value">{info.STEEL_GRADE}</span></div>
        <div><span className="label">Shift:</span> <span className="value">{info.SHIFT_TEAM_NAME}</span></div>
        <div><span className="label">Foreman:</span> <span className="value"></span></div>
      </div>

      <div className="section-row">
        {/* Cột 1: General + Operator Comment */}
        <div className="column">
          <GeneralSection heatName={heatName} />
          <OperatorCommentSection />
          <TundishTempSporadic heatName={heatName} />
        </div>

        {/* Cột 2: Ladle + Shroud + Steel Loss */}
        <div className="column">
          <LadleSection heatName={heatName} />
          <ShroudSection heatName={heatName} />
          <SteelLossSection heatName={heatName} />
          <TundishTempContinuous />
        </div>

        {/* Cột 3: Ladle Arrival */}
        <div className="column">
          <LadleArrivalSection heatName={heatName} />
          <LadleDepartureSection heatName={heatName} />
        </div>

        {/* Cột 4: Tundish */}
        <div className="column">
          <TundishSection heatName={heatName} />
          <TundishMaterialSection heatName={heatName} />
        </div>
      </div>
      <StrandDataSection heatName={heatName} />
    </div>
  );
}

export default App;
