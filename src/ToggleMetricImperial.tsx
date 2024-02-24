import React, { useState, useContext } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { withStyles } from '@mui/styles';

import { SharedContext, MeasurementSystem } from './SharedContext';

interface ToggleMetricImperialProps {}

const CustomSwitch = withStyles({
  switchBase: {
    color: '#2196F3',
    '&$checked': {
      color: '#2196F3',
    },
    '&$checked + $track': {
      backgroundColor: '#2196F3',
    },
  },
  checked: {},
  track: {},
})(Switch);

const ToggleMetricImperial: React.FC<ToggleMetricImperialProps> = () => {
    const context = useContext(SharedContext);

    if (!context) {
      // Handle the case where SharedContext is undefined
      return null;
    }
  
    const {
      measurementSystem,
      setMeasurementSystem
    } = context;

    const handleToggle = () => {
        setMeasurementSystem(measurementSystem => (measurementSystem === MeasurementSystem.Metric ? MeasurementSystem.Imperial : MeasurementSystem.Metric));
    };

    return (
    <div style={{ position: 'fixed', top: 10, right: 10 }}>
        <FormControlLabel
        control={<CustomSwitch checked={measurementSystem === MeasurementSystem.Imperial} onChange={handleToggle} />}
        label={measurementSystem === MeasurementSystem.Imperial ? 'Imperial' : 'Metric'}
        />
    </div>
    );
};

export default ToggleMetricImperial;
