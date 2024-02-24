import React, { createContext, useState, ReactNode } from 'react';

export enum MeasurementSystem {
    Metric = "Metric",
    Imperial = "Imperial"
}

export enum WallThickness {
    Standard = "Standard",
    Thick = "Thick"
}

export interface SharedContextProps {
    measurementSystem: MeasurementSystem;
    setMeasurementSystem: React.Dispatch<React.SetStateAction<MeasurementSystem>>;
    nominalDiameter: number;
    setNominalDiameter: React.Dispatch<React.SetStateAction<number>>;
    wallThickness: WallThickness;
    setWallThickness: React.Dispatch<React.SetStateAction<WallThickness>>;
    SDR: number;
    setSDR: React.Dispatch<React.SetStateAction<number>>;
    lengthOfPipeline: number;
    setLengthOfPipeline: React.Dispatch<React.SetStateAction<number>>;
    NOP: number;
    setNOP: React.Dispatch<React.SetStateAction<number>>;
    outsideDiameter: number;
    setOutsideDiameter: React.Dispatch<React.SetStateAction<number>>;
    innerDiameter: number;
    setInnerDiameter: React.Dispatch<React.SetStateAction<number>>;
    useCrossCompression: string;
    setUseCrossCompression: React.Dispatch<React.SetStateAction<string>>;
    startingPressure: number;
    setStartingPressure: React.Dispatch<React.SetStateAction<number>>;
    endingPressure: number;
    setEndingPressure: React.Dispatch<React.SetStateAction<number>>;
    fuelConsumed: number;
    setFuelConsumed: React.Dispatch<React.SetStateAction<number>>;
    costOfOperation: number;
    setCostOfOperation: React.Dispatch<React.SetStateAction<number>>;
    naturalGasSocialCreditDollarRep: number,
    setNaturalGasSocialCreditDollarRep: React.Dispatch<React.SetStateAction<number>>;
    co2eSocialCreditDollarRep: number;
    setco2eSocialCreditDollarRep: React.Dispatch<React.SetStateAction<number>>;
    drawdownLength: number;
    setDrawdownLength: React.Dispatch<React.SetStateAction<number>>;
    drawdownInsideDiameter: number;
    setDrawdownInsideDiameter: React.Dispatch<React.SetStateAction<number>>;
    startPressure: number;
    setStartPressure: React.Dispatch<React.SetStateAction<number>>;
    finishPressure: number;
    setFinishPressure: React.Dispatch<React.SetStateAction<number>>;
    pressureStep: number;
    setPressureStep: React.Dispatch<React.SetStateAction<number>>;
    pressureBase: number;
    setPressureBase: React.Dispatch<React.SetStateAction<number>>;
    cyclePerMinute: number;
    setCyclePerMinute: React.Dispatch<React.SetStateAction<number>>;
    unitEfficiency: number;
    setUnitEfficiency: React.Dispatch<React.SetStateAction<number>>;
    zevacD: number;
    setZevacD: React.Dispatch<React.SetStateAction<number>>;
    zevacM: number;
    setZevacM: React.Dispatch<React.SetStateAction<number>>;
    zevacT: number;
    setZevacT: React.Dispatch<React.SetStateAction<number>>;
    zevacH: number;
    setZevacH: React.Dispatch<React.SetStateAction<number>>;
}

const SharedContext = createContext<SharedContextProps | undefined>(undefined);

interface SharedProviderProps {
    children: ReactNode;  // Use ReactNode for children
}

const SharedProvider: React.FC<SharedProviderProps> = ({ children }) => {
    const [measurementSystem, setMeasurementSystem] = useState<MeasurementSystem>(MeasurementSystem.Imperial);
    const [nominalDiameter, setNominalDiameter] = useState<number>(14);
    const [wallThickness, setWallThickness] = useState<WallThickness>(WallThickness.Standard);
    const [SDR, setSDR] = useState<number>(0);
    const [lengthOfPipeline, setLengthOfPipeline] = useState<number>(211200);
    const [NOP, setNOP] = useState<number>(661);
    const [outsideDiameter, setOutsideDiameter] = useState<number>(14);
    const [innerDiameter, setInnerDiameter] = useState<number>(13.25);

    const [useCrossCompression, setUseCrossCompression] = useState<string>("Yes");
    const [startingPressure, setStartingPressure] = useState<number>(661);
    const [endingPressure, setEndingPressure] = useState<number>(278.91);
    const [fuelConsumed, setFuelConsumed] = useState<number>(1548);
    const [costOfOperation, setCostOfOperation] = useState<number>(0);
    const [naturalGasSocialCreditDollarRep, setNaturalGasSocialCreditDollarRep] = useState<number>(1500);
    const [co2eSocialCreditDollarRep, setco2eSocialCreditDollarRep] = useState<number>(51);
    const [drawndownLength, setDrawdownLength] = useState<number>(4488);
    const [drawdownInsideDiameter, setDrawdownInsideDiameter] = useState<number>(8);
    const [startPressure, setStartPressure] = useState<number>(500);
    const [finishPressure, setFinishPressure] = useState<number>(3.8);
    const [pressureStep, setPressureStep] = useState<number>(1);
    const [pressureBase, setPressureBase] = useState<number>(14.696);
    const [cyclePerMinute, setCyclePerMinute] = useState<number>(47);
    const [unitEfficiency, setUnitEfficiency] = useState<number>(0.8);
    const [zevacD, setZevacD] = useState<number>(0);
    const [zevacM, setZevacM] = useState<number>(3);
    const [zevacT, setZevacT] = useState<number>(0);
    const [zevacH, setZevacH] = useState<number>(0);

    const stateProperties: SharedContextProps = {
        measurementSystem: measurementSystem,
        setMeasurementSystem: setMeasurementSystem,
        nominalDiameter: nominalDiameter,
        setNominalDiameter: setNominalDiameter,
        wallThickness: wallThickness,
        setWallThickness: setWallThickness,
        SDR: SDR,
        setSDR: setSDR,
        lengthOfPipeline: lengthOfPipeline,
        setLengthOfPipeline: setLengthOfPipeline,
        NOP: NOP,
        setNOP: setNOP,
        outsideDiameter: outsideDiameter,
        setOutsideDiameter: setOutsideDiameter,
        innerDiameter: innerDiameter,
        setInnerDiameter: setInnerDiameter,
        useCrossCompression: useCrossCompression,
        setUseCrossCompression: setUseCrossCompression,
        startingPressure: startingPressure,
        setStartingPressure: setStartingPressure,
        endingPressure: endingPressure,
        setEndingPressure: setEndingPressure,
        fuelConsumed: fuelConsumed,
        setFuelConsumed: setFuelConsumed,
        costOfOperation: costOfOperation,
        setCostOfOperation: setCostOfOperation,
        naturalGasSocialCreditDollarRep: naturalGasSocialCreditDollarRep,
        setNaturalGasSocialCreditDollarRep: setNaturalGasSocialCreditDollarRep,
        co2eSocialCreditDollarRep: co2eSocialCreditDollarRep,
        setco2eSocialCreditDollarRep: setco2eSocialCreditDollarRep,
        drawdownLength: drawndownLength,
        setDrawdownLength: setDrawdownLength,
        drawdownInsideDiameter: drawdownInsideDiameter,
        setDrawdownInsideDiameter: setDrawdownInsideDiameter,
        startPressure: startPressure,
        setStartPressure: setStartPressure,
        finishPressure: finishPressure,
        setFinishPressure: setFinishPressure,
        pressureStep: pressureStep,
        setPressureStep: setPressureStep,
        pressureBase: pressureBase,
        setPressureBase: setPressureBase,
        cyclePerMinute: cyclePerMinute,
        setCyclePerMinute: setCyclePerMinute,
        unitEfficiency: unitEfficiency,
        setUnitEfficiency: setUnitEfficiency,
        zevacD: zevacD,
        setZevacD: setZevacD,
        zevacM: zevacM,
        setZevacM: setZevacM,
        zevacT: zevacT,
        setZevacT: setZevacT,
        zevacH: zevacH,
        setZevacH: setZevacH
    };

    return (
        <SharedContext.Provider value={stateProperties}>
            {children}
        </SharedContext.Provider>
    );
};

export { SharedContext, SharedProvider };
