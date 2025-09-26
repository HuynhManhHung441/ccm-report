import React, { useEffect, useState } from 'react';
import './ShiftReport.css';

import ShiftReportHeader from '../components/ShiftReportHeader';
import ShiftDetails from '../components/ShiftDetails';
import SteelGradeSummary from '../components/SteelGradeSummary';

function ShiftReport() {
  return (
    <div className="container">
        <div id="shift-report__content">
            <ShiftReportHeader />
            <ShiftDetails />
            <SteelGradeSummary />
        </div>
    </div>
  );
}

export default ShiftReport;
