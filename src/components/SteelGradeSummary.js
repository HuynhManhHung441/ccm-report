import './SteelGradeSummary.css';

function SteelGradeSummary() {
  return (
    <div className="steel-grade-summary">
      <div className="section-title">STEEL GRADE SUMMARY</div>
      <table className="steel-grade-summary-table">
        <thead>
          <tr>
            <th className="label">Steel Grade</th>
            <th className="label">Total Heats</th>
            <th className="label">Total Slabs</th>
            <th className="label">Total Weight [t]</th>
            <th className="label">Total Prod. [%]</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>S275JR-2</td>
              <td>4</td>
              <td>54</td>
              <td>1178.0</td>
              <td>45.7</td>
            </tr>
            <tr>
              <td>S275JR-2A</td>
              <td>5</td>
              <td>70</td>
              <td>1380.0</td>
              <td>54.3</td>
            </tr>
            <tr>
              <td>Sum</td>
              <td>9</td>
              <td>124</td>
              <td>2558.0</td>
              <td></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SteelGradeSummary;
