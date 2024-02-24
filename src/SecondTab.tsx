import React from 'react';
import { MeasurementSystem, SharedContextProps } from './SharedContext';

export const calculateGasAtStart: (context: SharedContextProps) => number = (context) => {
  const suctionPressure = [context.finishPressure];
  suctionPressure.push(suctionPressure[0] > context.startPressure ? 0 : suctionPressure[0] + context.pressureStep);

  for (let i = 0; i < 2010; i++) {
    suctionPressure.push(suctionPressure[suctionPressure.length - 1] > context.startPressure ? 0 : suctionPressure[suctionPressure.length - 1] + context.pressureStep);
  }

  const oneACFToSCF: number[] = [];
  for (let i = 0; i < 2010; i ++) {
    oneACFToSCF.push(suctionPressure[i] === 0 ? 0 : ((context.pressureBase + suctionPressure[i]) / (context.pressureBase)));
  } 

  const drawdownVolume = context.drawdownLength * Math.PI / 4 * (context.drawdownInsideDiameter ** 2) / 144;
  return context.measurementSystem === MeasurementSystem.Imperial ? drawdownVolume * Math.max(...oneACFToSCF) : drawdownVolume * Math.max(...oneACFToSCF) * 0.0283168;
}

export const calculateGasAtFinish: (context: SharedContextProps) => number = (context) => {
  const drawdownVolume = context.drawdownLength * Math.PI / 4 * (context.drawdownInsideDiameter ** 2) / 144;
  const suctionPressure = context.finishPressure;
  const oneACFToSCF = suctionPressure === 0 ? 0 : ((context.pressureBase + suctionPressure) / (context.pressureBase));

  return context.measurementSystem === MeasurementSystem.Imperial ? drawdownVolume * oneACFToSCF : drawdownVolume * oneACFToSCF * 0.0283168;
}

export const calculateHoursDrawdownTime: (context: SharedContextProps) => number = (context) => {
  const suctionPressure = [context.finishPressure];
  suctionPressure.push(suctionPressure[0] > context.startPressure ? 0 : suctionPressure[0] + context.pressureStep);

  for (let i = 0; i < 2010; i++) {
    suctionPressure.push(suctionPressure[suctionPressure.length - 1] > context.startPressure ? 0 : suctionPressure[suctionPressure.length - 1] + context.pressureStep);
  }

  const drawdownVolume = context.drawdownLength * Math.PI / 4 * (context.drawdownInsideDiameter ** 2) / 144;

  const oneACFToSCF: number[] = [];
  for (let i = 0; i < 2010; i ++) {
    oneACFToSCF.push(suctionPressure[i] === 0 ? 0 : ((context.pressureBase + suctionPressure[i]) / (context.pressureBase)));
  } 

  const scfRemaining: number[] = [];
  for (let i = 0; i < suctionPressure.length; i += 1) {
    scfRemaining.push(drawdownVolume * oneACFToSCF[i]);
  }

  const acfmNet = getACFMNet(context);

  const scfm: number[] = [];
  for (let i = 0; i < oneACFToSCF.length; i += 1) {
    scfm.push(oneACFToSCF[i] * acfmNet);
  }

  const pressureDropPerMinute: number[] = [];
  for (let i = 0; i < suctionPressure.length; i += 1) {
    pressureDropPerMinute.push(suctionPressure[i] <= 0 ? 0 : suctionPressure[i] - suctionPressure[i] * (scfRemaining[i] - scfm[i]) / scfRemaining[i]);
  }

  const timeToDrop: number[] = [];
  for (let i  = 0; i < pressureDropPerMinute.length; i += 1) {
    timeToDrop.push(pressureDropPerMinute[i] <= 0 ? 0 : scfRemaining[i] / oneACFToSCF[i] / scfm[i]);
  }

  const timeElapsedMinutes: number[] = [];
  for (let i = 0; i < 498 - 1; i += 1) {
    timeElapsedMinutes.push(isNaN(timeToDrop[i] - timeToDrop[i + 1]) ? 0 : timeToDrop[i] - timeToDrop[i + 1]);
  }

  const timeElapsedHours: number[] = timeElapsedMinutes.map(minutes => minutes > 0 ? minutes / 60 : 0);

  const hoursDrawdownTime = timeElapsedHours.reduce((acc, currentValue) => acc + currentValue, 0) - Math.max(...timeElapsedHours);

  return hoursDrawdownTime;
}

const getACFMNet: (context: SharedContextProps) => number = (context) => {
  const stroke: number[] = [12, 12, 12, 12];
  const s12Bore: number[] = [7, 4, 4, 2.75];
  const s34Bore: number[] = [7, 4, 2.75, 2.75];
  const zevacNumCycles: number[] = [context.zevacD, context.zevacM, context.zevacT, context.zevacH];

  const s1vol: number[] = [];
  for (let i = 0; i < stroke.length; i += 1) {
    s1vol.push(stroke[i] * Math.PI / 4 * s12Bore[i] ** 2);
  }

  const s2vol: number[] = [];
  for (let i = 0; i < stroke.length; i += 1) {
    s2vol.push(stroke[i] * Math.PI / 4 * (s12Bore[i] ** 2 - 4))
  }

  const s3vol: number[] = [];
  for (let i = 0; i < stroke.length; i += 1) {
    s3vol.push(stroke[i] * Math.PI / 4 * (s34Bore[i] ** 2))
  }

  const s4vol: number[] = [];
  for (let i = 0; i < stroke.length; i += 1) {
    s4vol.push(stroke[i] * Math.PI / 4 * (s34Bore[i] ** 2 - 4))
  }

  const aStrokeSuction: number[] = [];
  for (let i = 0; i < s1vol.length; i += 1) {
    aStrokeSuction.push(s1vol[i] + (i < 2 ? s4vol[i] : 0));
  }

  const bStrokeSuction: number[] = [];
  for (let i = 0; i < s2vol.length; i += 1) {
    bStrokeSuction.push(s2vol[i] + (i < 2 ? s3vol[i]: 0));
  }

  const cycleSuction: number[] = [];
  for (let i = 0; i < bStrokeSuction.length; i += 1) {
    cycleSuction.push(aStrokeSuction[i] + bStrokeSuction[i]);
  }

  const acfCycleUnit: number[] = [];
  for (let i = 0; i < cycleSuction.length; i += 1) {
    acfCycleUnit.push(context.unitEfficiency * cycleSuction[i] / (12 ** 3))
  }

  const acfmUnits: number[] = [];
  for (let i = 0; i < acfCycleUnit.length; i += 1) {
    acfmUnits.push(context.cyclePerMinute * acfCycleUnit[i]);
  }
  
  const acfmNet: number[] = [];
  for (let i = 0; i < acfmUnits.length; i += 1) {
    acfmNet.push(acfmUnits[i] * zevacNumCycles[i]);
  }

  return acfmNet.reduce((acc, currentValue) => acc + currentValue, 0);
}

const SecondTab: React.FC = () => {
  return (
    <div>
      <p>Lee's Flow Chart Logic goes here...</p>
    </div>
  );
};

export default SecondTab;
