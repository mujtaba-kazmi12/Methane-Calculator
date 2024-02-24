import React, { useContext,useState } from 'react';
import { MeasurementSystem, SharedContext } from './SharedContext';
import { TableCell, TableContainer, TableRow, Table, TableHead, TableBody } from '@material-ui/core';

const FirstTab: React.FC = () => {
  const context = useContext(SharedContext);

  if (!context) {
    return null;
  }

  const {
    measurementSystem,
    drawdownLength,
    setDrawdownLength,
    drawdownInsideDiameter,
    setDrawdownInsideDiameter,
    startPressure,
    setStartPressure,
    finishPressure,
    setFinishPressure,
    zevacD,
    setZevacD,
    zevacM,
    setZevacM,
    zevacT,
    setZevacT,
    zevacH,
    setZevacH,
    cyclePerMinute,
    setCyclePerMinute,
    unitEfficiency,
    setUnitEfficiency
  } = context;

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Input</TableCell>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Drawdown Length {measurementSystem === MeasurementSystem.Imperial ? '(ft.)' : '(m.)'}</TableCell>
              <TableCell>
                {/* <input
                  type="number"
                  value={drawdownLength}
                  onChange={(e) => setDrawdownLength(Number(e.target.value) * (measurementSystem === MeasurementSystem.Imperial ? 1 : 3.28084))}
                  placeholder="Enter Drawdown Length value"
                /> */}
                <button
    type="button"
    onClick={() => setDrawdownLength(prev => Math.max(prev - 1, 0))}
    className="spin-button"
  >-</button>
  <input
    type="number"
    value={drawdownLength}
    onChange={(e) => setDrawdownLength(Number(e.target.value)* (measurementSystem === MeasurementSystem.Imperial ? 1 : 3.28084))}
    placeholder="Enter Drawdown Length value"
    className="number-input"
  />
  <button
    type="button"
    onClick={() => setDrawdownLength(prev => prev + 1)}
    className="spin-button"
  >+</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Drawdown Inside Diameter {measurementSystem === MeasurementSystem.Imperial ? '(ft.)' : '(m.)'}</TableCell>
              <TableCell>
                {/* <input
                  type="number"
                    
                  value={drawdownInsideDiameter}
                  onChange={(e) => setDrawdownInsideDiameter(Number(e.target.value) * (measurementSystem === MeasurementSystem.Imperial ? 1 : 3.28084))}
                  placeholder="Enter Drawdown Inside Diameter value"
                /> */}
                        <button
    type="button"
    onClick={() => setDrawdownInsideDiameter(prev => Math.max(prev - 1, 0))}
    className="spin-button"
  >-</button>
  <input
    type="number"
    value={drawdownInsideDiameter}
    onChange={(e) => setDrawdownInsideDiameter(Number(e.target.value)* (measurementSystem === MeasurementSystem.Imperial ? 1 : 3.28084))}
    placeholder="Enter drawdownInsideDiameter  value"
    className="number-input"
  />
  <button
    type="button"
    onClick={() => setDrawdownInsideDiameter(prev => prev + 1)}
    className="spin-button"
  >+</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Start Pressure {measurementSystem === MeasurementSystem.Imperial ? '(PSIG)' : '(PA)'}</TableCell>
              <TableCell>
                {/* <input
                  type="number"
                  value={startPressure}
                  onChange={(e) => setStartPressure(Number(e.target.value) / (measurementSystem === MeasurementSystem.Imperial ? 1 : 6894.76))}
                  placeholder="Enter Start Pressure value"
                /> */}

<button
    type="button"
    onClick={() => setStartPressure(prev => Math.max(prev - 1, 0))}
    className="spin-button"
  >-</button>
  <input
    type="number"
    value={startPressure}
    onChange={(e) => setStartPressure(Number(e.target.value)*(measurementSystem === MeasurementSystem.Imperial ? 1 : 6894.76))}
    placeholder="Enter Drawdown Length value"
    className="number-input"
  />
  <button
    type="button"
    onClick={() => setStartPressure(prev => prev + 1)}
    className="spin-button"
  >+</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Finish Pressure {measurementSystem === MeasurementSystem.Imperial ? '(PSIG)' : '(PA)'}</TableCell>
              <TableCell>
                {/* <input
                  type="number"
                  value={finishPressure}
                  onChange={(e) => setFinishPressure(Number(e.target.value) / (measurementSystem === MeasurementSystem.Imperial ? 1 : 6894.76))}
                  placeholder="Enter Finish Pressure value"
                /> */}

<button
    type="button"
    onClick={() => setFinishPressure(prev => Math.max(prev - 1, 0))}
    className="spin-button"
  >-</button>
  <input
    type="number"
    value={finishPressure}
    onChange={(e) => setFinishPressure(Number(e.target.value)*(measurementSystem === MeasurementSystem.Imperial ? 1 : 6894.76))}
    placeholder="Enter Drawdown Length value"
    className="number-input"
  />
  <button
    type="button"
    onClick={() => setFinishPressure(prev => prev + 1)}
    className="spin-button"
  >+</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Recovery Compressor: UNIT-D</TableCell>
              <TableCell>
                {/* <input
                  type="number"
                  value={zevacD}
                  onChange={(e) => setZevacD(Number(e.target.value))}
                  placeholder="Enter ZEVAC-D value"
                /> */}
                <button
    type="button"
    onClick={() => setZevacD(prev => Math.max(prev - 1, 0))}
    className="spin-button"
  >-</button>
  <input
    type="number"
    value={zevacD}
    onChange={(e) => setZevacD(Number(e.target.value))}
    placeholder="Enter Drawdown Length value"
    className="number-input"
  />
  <button
    type="button"
    onClick={() => setZevacD(prev => prev + 1)}
    className="spin-button"
  >+</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Recovery Compressor: UNIT-M</TableCell>
              <TableCell>
                {/* <input
                  type="number"
                  value={zevacM}
                  onChange={(e) => setZevacM(Number(e.target.value))}
                  placeholder="Enter ZEVAC-M value"
                /> */}
                <button
    type="button"
    onClick={() => setZevacM(prev => Math.max(prev - 1, 0))}
    className="spin-button"
  >-</button>
  <input
    type="number"
    value={zevacM}
    onChange={(e) => setZevacM(Number(e.target.value))}
    placeholder="Enter Drawdown Length value"
    className="number-input"
  />
  <button
    type="button"
    onClick={() => setZevacM(prev => prev + 1)}
    className="spin-button"
  >+</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Recovery Compressor: UNIT-T</TableCell>
              <TableCell>
                {/* <input
                  type="number"
                  value={zevacT}
                  onChange={(e) => setZevacT(Number(e.target.value))}
                  placeholder="Enter ZEVAC-T value"
                /> */}
                   <button
    type="button"
    onClick={() => setZevacT(prev => Math.max(prev - 1, 0))}
    className="spin-button"
  >-</button>
  <input
    type="number"
    value={zevacT}
    onChange={(e) => setZevacT(Number(e.target.value))}
    placeholder="Enter Drawdown Length value"
    className="number-input"
  />
  <button
    type="button"
    onClick={() => setZevacT(prev => prev + 1)}
    className="spin-button"
  >+</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Recovery Compressor: UNIT-H</TableCell>
              <TableCell>
                {/* <input
                  type="number"
                  value={zevacH}
                  onChange={(e) => setZevacH(Number(e.target.value))}
                  placeholder="Enter ZEVAC-H value"
                /> */}
                   <button
    type="button"
    onClick={() => setZevacH(prev => Math.max(prev - 1, 0))}
    className="spin-button"
  >-</button>
  <input
    type="number"
    value={zevacH}
    onChange={(e) => setZevacH(Number(e.target.value))}
    placeholder="Enter Drawdown Length value"
    className="number-input"
  />
  <button
    type="button"
    onClick={() => setZevacH(prev => prev + 1)}
    className="spin-button"
  >+</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Cycle Per Minute</TableCell>
              <TableCell>
                {/* <input
                  type="number"
                  value={cyclePerMinute}
                  onChange={(e) => setCyclePerMinute(Number(e.target.value))}
                  placeholder="Enter Cycle per Minute value"
                /> */}
                 <button
    type="button"
    onClick={() => setCyclePerMinute(prev => Math.max(prev - 1, 0))}
    className="spin-button"
  >-</button>
  <input
    type="number"
    value={cyclePerMinute}
    onChange={(e) => setCyclePerMinute(Number(e.target.value))}
    placeholder="Enter Drawdown Length value"
    className="number-input"
  />
  <button
    type="button"
    onClick={() => setCyclePerMinute(prev => prev + 1)}
    className="spin-button"
  >+</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold'}}>Unit Efficiency</TableCell>
              <TableCell>
                {/* <input
                  type="number"
                  value={unitEfficiency}
                  onChange={(e) => setUnitEfficiency(Number(e.target.value))}
                  placeholder="Enter Unit Efficiency value"
                /> */}
                  <button
    type="button"
    onClick={() => setUnitEfficiency(prev => Math.max(prev - 1, 0))}
    className="spin-button"
  >-</button>
  <input
    type="number"
    value={unitEfficiency}
    onChange={(e) => setUnitEfficiency(Number(e.target.value))}
    placeholder="Enter Drawdown Length value"
    className="number-input"
  />
  <button
    type="button"
    onClick={() => setUnitEfficiency(prev => prev + 1)}
    className="spin-button"
  >+</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FirstTab;