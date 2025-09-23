import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShiftReportHeader.css';

function ShiftReportHeader() {
  return (
    <div className="shift-report-header">
        <div className="header">
            <h1 className="shift-title">SHIFT REPORT CCM2-HRC2</h1>
            <img src="/assets/images/LogoGangThepBlue.png" alt="Hòa Phát Logo" className="logo" />
        </div>
    </div>
  );
}

export default ShiftReportHeader;
