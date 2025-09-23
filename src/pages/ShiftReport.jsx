import React, { useEffect, useState } from 'react';
import './ShiftReport.css';

import ShiftReportHeader from '../components/ShiftReportHeader';

function ShiftReport() {
  return (
    <div className="container">
        <div id="shift-report__content">
            <ShiftReportHeader />
        </div>
    </div>
  );
}

export default ShiftReport;
