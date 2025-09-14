import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import HeatReportHeader from './components/HeatReportHeader';
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
import AnalysisDataSection from './components/AnalysisDataSection';
import SlabData from './components/SlabData';
import SlabSectionData from './components/SlabSectionData';

function App() {
  const [heatName, setHeatName] = useState('25F003353');
  const [heatNameInput, setHeatNameInput] = useState();

  const handleSearch = () => {
    if (!heatNameInput.trim()) return;
    setHeatName(heatNameInput.trim());
    setHeatNameInput("");
  };

  return (
    <div className="container">
      <div id="heat-report__content">
        <HeatReportHeader heatName={heatName} />
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
        <AnalysisDataSection heatName={heatName} />
        <SlabData heatName={heatName} />
        <SlabSectionData heatName={heatName} />
      </div>
      <div className="heat-report__search">
        <input
            type="text"
            placeholder="🔍Heat Name"
            value={heatNameInput}
            onChange={(e)=>setHeatNameInput(e.target.value)}
          />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default App;
