// src/components/SlabDataSection.js
import React from "react";
import "./SlabDataSection.css";

export default function SlabDataSection() {
  const dummyData = [
    {
      strand: 3,
      no: 1,
      markingNo: "25F00335301",
      lengthAct: 7812,
      lengthAim: 7800,
      lengthMin: 7710,
      lengthMax: 7800,
      widthFront: 1550,
      widthBack: 1550,
      thick: 230,
      weightCalc: 21.84,
      weightAct: 21.82,
      time: "16:31",
      cutMode: "L2",
      sample: "N",
      qeInt: "❌",
      qeSurf: "✅",
      destination: "-",
    },
    {
      strand: 3,
      no: 1,
      markingNo: "25F00335302",
      lengthAct: 7812,
      lengthAim: 7800,
      lengthMin: 7710,
      lengthMax: 7800,
      widthFront: 1550,
      widthBack: 1550,
      thick: 230,
      weightCalc: 21.84,
      weightAct: 21.82,
      time: "16:31",
      cutMode: "L2",
      sample: "N",
      qeInt: "❌",
      qeSurf: "✅",
      destination: "-",
    },
    {
      strand: 3,
      no: 1,
      markingNo: "25F00335401",
      lengthAct: 7812,
      lengthAim: 7800,
      lengthMin: 7710,
      lengthMax: 7800,
      widthFront: 1550,
      widthBack: 1550,
      thick: 230,
      weightCalc: 21.84,
      weightAct: 21.82,
      time: "16:31",
      cutMode: "L2",
      sample: "N",
      qeInt: "❌",
      qeSurf: "✅",
      destination: "-",
    },
    {
      strand: 3,
      no: 1,
      markingNo: "25F00335305",
      lengthAct: 7812,
      lengthAim: 7800,
      lengthMin: 7710,
      lengthMax: 7800,
      widthFront: 1550,
      widthBack: 1550,
      thick: 230,
      weightCalc: 21.84,
      weightAct: 21.82,
      time: "16:31",
      cutMode: "L2",
      sample: "N",
      qeInt: "❌",
      qeSurf: "✅",
      destination: "-",
    },
    {
      strand: 3,
      no: 1,
      markingNo: "25F00336301",
      lengthAct: 7812,
      lengthAim: 7800,
      lengthMin: 7710,
      lengthMax: 7800,
      widthFront: 1550,
      widthBack: 1550,
      thick: 230,
      weightCalc: 21.84,
      weightAct: 21.82,
      time: "16:31",
      cutMode: "L2",
      sample: "N",
      qeInt: "❌",
      qeSurf: "✅",
      destination: "-",
    },
    {
      strand: 3,
      no: 1,
      markingNo: "25F00835301",
      lengthAct: 7812,
      lengthAim: 7800,
      lengthMin: 7710,
      lengthMax: 7800,
      widthFront: 1550,
      widthBack: 1550,
      thick: 230,
      weightCalc: 21.84,
      weightAct: 21.82,
      time: "16:31",
      cutMode: "L2",
      sample: "N",
      qeInt: "❌",
      qeSurf: "✅",
      destination: "-",
    },
    {
      strand: 3,
      no: 1,
      markingNo: "25F00336401",
      lengthAct: 7812,
      lengthAim: 7800,
      lengthMin: 7710,
      lengthMax: 7800,
      widthFront: 1550,
      widthBack: 1550,
      thick: 230,
      weightCalc: 21.84,
      weightAct: 21.82,
      time: "16:31",
      cutMode: "L2",
      sample: "N",
      qeInt: "❌",
      qeSurf: "✅",
      destination: "-",
    },
    {
      strand: 3,
      no: 1,
      markingNo: "25F00375301",
      lengthAct: 7812,
      lengthAim: 7800,
      lengthMin: 7710,
      lengthMax: 7800,
      widthFront: 1550,
      widthBack: 1550,
      thick: 230,
      weightCalc: 21.84,
      weightAct: 21.82,
      time: "16:31",
      cutMode: "L2",
      sample: "N",
      qeInt: "❌",
      qeSurf: "✅",
      destination: "-",
    },
    {
      strand: 3,
      no: 2,
      markingNo: "25F00335312",
      lengthAct: 7800,
      lengthAim: 7800,
      lengthMin: 7710,
      lengthMax: 7800,
      widthFront: 1550,
      widthBack: 1550,
      thick: 230,
      weightCalc: 21.80,
      weightAct: 21.79,
      time: "16:34",
      cutMode: "L2",
      sample: "Y",
      qeInt: "✅",
      qeSurf: "✅",
      destination: "Yard",
    },
  ];

  const totalWeightCalc = dummyData.reduce((sum, row) => sum + row.weightCalc, 0);
  const totalWeightAct = dummyData.reduce((sum, row) => sum + row.weightAct, 0);
  const totalLengthAct = dummyData.reduce((sum, row) => sum + row.lengthAct, 0);

  return (
    <section className="slab-section">
      <div className="section-title">SLAB DATA</div>
      <div className="table-container">
        <table className="slab-table">
          <thead>
            <tr>
               <th rowSpan="2" className="label">Strand</th>
               <th rowSpan="2" className="label">No</th>
               <th rowSpan="2" className="label">Marking No.</th>
              <th colSpan="4" className="label">Length [mm]</th>
              <th colSpan="2" className="label">Width [mm]</th>
              <th rowSpan="2" className="label">Thick [mm]</th>
              <th colSpan="2" className="label">Weight [t]</th>

              <th colSpan="3" className="label">Cut</th>
              <th colSpan="2" className="label">QE</th>
              <th rowSpan="2" className="label">Destination</th>
            </tr>
            <tr>
              <th className="label">Act</th><th className="label">Aim</th><th className="label">Min</th><th className="label">Max</th>
              <th className="label">Front</th><th className="label">Back</th>
              <th className="label">Calc</th><th className="label">Act</th>
              <th className="label">Time</th><th className="label">Mode</th><th className="label">Sample</th>
              <th className="label">Int</th><th className="label">Surf</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.strand}</td>
                <td>{row.no}</td>
                <td>{row.markingNo}</td>
                <td>{row.lengthAct}</td>
                <td>{row.lengthAim}</td>
                <td>{row.lengthMin}</td>
                <td>{row.lengthMax}</td>
                <td>{row.widthFront}</td>
                <td>{row.widthBack}</td>
                <td>{row.thick}</td>
                <td>{row.weightCalc.toFixed(2)}</td>
                <td>{row.weightAct.toFixed(2)}</td>
                <td>{row.time}</td>
                <td>{row.cutMode}</td>
                <td>{row.sample}</td>
                <td>{row.qeInt}</td>
                <td>{row.qeSurf}</td>
                <td>{row.destination}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="1"></td>
              <td colSpan="1">{dummyData.length} Slabs</td>
              <td colSpan="1"></td>
              <td colSpan="1">{totalLengthAct.toFixed(2)}</td>
              <td colSpan="6"></td>
              <td>{totalWeightCalc.toFixed(2)}</td>
              <td>{totalWeightAct.toFixed(2)}</td>
              <td colSpan="6"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
