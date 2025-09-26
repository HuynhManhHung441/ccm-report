import './ShiftDetails.css';

function ShiftDetails() {
  return (
    <div className="shift-details">
      <div className="section-title">SHIFT DETAILS</div>
      <table className="shift-details-table">
        <thead>
          <tr>
            <th className="label">Shift</th>
            <th className="label">Total Heats</th>
            <th className="label">Total Slabs</th>
            <th className="label">Total Weight [t]</th>
            <th className="label">Total Prod. [%]</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>A</td>
              <td>9</td>
              <td>124</td>
              <td>2558.0</td>
              <td>100.0</td>
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

export default ShiftDetails;
