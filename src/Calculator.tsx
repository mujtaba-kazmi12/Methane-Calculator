import React, { useState, useContext } from 'react';
// import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper } from '@material-ui/core';
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper, Grid } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './index.css'
import FirstTab from './FirstTab';
import { calculateGasAtFinish, calculateGasAtStart, calculateHoursDrawdownTime } from './SecondTab';
import ToggleMetricImperial from './ToggleMetricImperial';
import { SharedContext, MeasurementSystem } from './SharedContext';



import { makeStyles } from '@material-ui/core/styles';
import { fontGrid } from '@mui/material/styles/cssUtils';

const useStyles = makeStyles({
  customTabIndicatorStyle: {
    backgroundColor: 'red', // Use the color of the text or any color you prefer
    height: '10px', // Custom height for the border
    // You can add other styling properties as needed
  },
});






interface CalculatorProps { };

const Calculator: React.FC<CalculatorProps> = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const context = useContext(SharedContext);

  if (!context) {
    return null;
  }

  const {
    measurementSystem,
  } = context;

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  }


  const classes = useStyles();
 
  return (
    <div className='sbkapapa'>
      {/* <ToggleMetricImperial /> */}
      <div className='HeaderMain'>
        <img src='/images/calcuLogo.png'/>
      </div>
      <div className="footprint-container">
      <div className="footprint-content">
        <div className="footprint-text">
          <h2>KNOW YOUR FOOTPRINT</h2>
          <p>Use this AI-driven calculator to determine  greenhouse gas footprint and learn the metrics needed to meet your ESG goals. This calculator converts your energy data with EPA guidelines and results in information that is easy to understand and use.</p>
        </div>
        <div className="footprint-image">
          {/* Image will go here. You can pass the path as a prop */}
          <img src={"/images/calculator.png"} alt="Carbon Footprint" />
        </div>
      </div>
    </div>
    
    

      <div className='HeaderMain2'>
        <h3 className='headingPipeLine'>STEP ONE: Enter PipeLine Inputs & Convert</h3>
      </div>
<div className='TableMainDiv'>
<div className='MainTable'>
        <Tabs value={selectedTab} onChange={handleTabChange} classes={{ indicator: classes.customTabIndicatorStyle }}>
          <Tab label="Pipeline Inputs" style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize:'20px' } } />
        </Tabs>
        {selectedTab === 0 && <FirstTab />}
      </div>
</div>
      
      
      <div className='HeaderMain2'>
        <h3 className='headingPipeLine'>STEP TWO: View Results</h3>
      </div>
     
 <div className='TableMainDiv'>
 <div className='sizeDiv'>
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <TableContainer component={Paper} style={{ border: '1px solid #b1b7c3' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold' }}>Hours Drawdown Time</TableCell>
              <TableCell style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold' }}>Gas Available at Start ({measurementSystem === MeasurementSystem.Imperial ? 'SCF' : 'SCM'})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ textAlign: 'center',fontSize: '20px' }}>{calculateHoursDrawdownTime(context).toLocaleString()}</TableCell>
              <TableCell style={{ textAlign: 'center',fontSize: '20px' }}>{calculateGasAtStart(context).toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
    <Grid item xs={12}>
      <TableContainer component={Paper} style={{ border: '1px solid #b1b7c3' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold' }}>Gas Recovered ({measurementSystem === MeasurementSystem.Imperial ? 'SCF' : 'SCM'})</TableCell>
              <TableCell style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold' }}>Gas Not Recovered ({measurementSystem === MeasurementSystem.Imperial ? 'SCF' : 'SCM'})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ textAlign: 'center',fontSize: '20px' }}>{(calculateGasAtStart(context) - calculateGasAtFinish(context)).toLocaleString()}</TableCell>
              <TableCell style={{ textAlign: 'center',fontSize: '20px' }}>{calculateGasAtFinish(context).toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
    <Grid item xs={12}>
      <TableContainer component={Paper} style={{ border: '1px solid #b1b7c3' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold' }}>Percent Gas Recovered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ textAlign: 'center',fontSize: '20px' }}>{(((calculateGasAtStart(context) - calculateGasAtFinish(context)) * 100) / (calculateGasAtStart(context))).toFixed(1)}%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>
</div>

 </div>


<div className='HeaderMain22'>
        <h3 className='headingPipeLine'>Summary Impacts</h3>
      </div>
     
<div className='TableMainDiv'>
<div className='sizeDiv'>
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TableContainer component={Paper} style={{ border: '1px solid #b1b7c3' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold' }}>Methane Emissions Recovered (tons)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ textAlign: 'center', color: 'green',fontSize: '20px' }}>{((calculateGasAtStart(context) - calculateGasAtFinish(context)) * 0.0055 * (measurementSystem === MeasurementSystem.Imperial ? 1 : 0.907185)).toLocaleString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <TableContainer component={Paper} style={{ border: '1px solid #b1b7c3' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold' }}>Equivalent CO2 Not Generated (tons)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ textAlign: 'center', color: 'green',fontSize: '20px' }}>{((calculateGasAtStart(context) - calculateGasAtFinish(context)) * 0.0055 * 264.9985763831 * (measurementSystem === MeasurementSystem.Imperial ? 1 : 0.907185)).toLocaleString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <TableContainer component={Paper} style={{ border: '1px solid #b1b7c3' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif',fontSize: '20px',fontWeight: 'bold' }}>Carbon Credits</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ textAlign: 'center', color: 'green',fontSize: '20px' }}>{((calculateGasAtStart(context) - calculateGasAtFinish(context)) * 0.0055 * 264.9985763831 * (measurementSystem === MeasurementSystem.Imperial ? 1 : 0.907185)).toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>
</div>

</div>

 <div className='newDiv'>
 <div className="info-component">
      <p>For additional information on how to convert emissions or energy data into concrete terms, 
      you can use EPA's Greenhouse Gas Equivalencies Calculator</p>
    </div>
 </div>
 
 


<div className='buttondiv'>
 <a  className="custom-link" href='https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator#results'><button className='grey-button'>Learn More</button></a> 
</div>




<div className='Footer'>
        <h4>
          Disclaimer:
        </h4>
        <p>
          Statements, data and other information contained on this website that are not historical facts are based on current expectations, estimates, forecasts, opinions and beliefs, and may constitute “forward-looking statements,” which can be identified by the use of forward-looking terminology such as “may,” “will,” “should,” “expect,” “projected,” “anticipate,” “target,” “estimate,” “intend,” “continue,” or “believe,” or other variations thereon or comparable terminology.  Due to various risks and uncertainties, actual events or results or the actual performance may differ materially from those reflected or contemplated in such forward-looking statements.  Nothing contained on this website may be relied upon as a guarantee, promise, assurance or a representation as to the future performance of any project and/or investment.
        </p>
      </div>

     
      
    </div>
  )
};

export default Calculator;
