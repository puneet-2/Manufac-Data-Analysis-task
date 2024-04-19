// src/components/WineStatistics.tsx

import React from 'react';
import { calculateMean, calculateMedian, calculateMode, calculateGamma } from '../utils/dataUtils';

interface WineStatisticsProps {
  data: { Alcohol: number; Flavanoids: number; Ash: number; Hue: number; Magnesium: number; }[];
}

const WineStatistics: React.FC<WineStatisticsProps> = ({ data }) => {
  // Calculate Flavanoids statistics
  const flavanoidsData = data.map((item) => item.Flavanoids);
  const flavanoidsMean = calculateMean(flavanoidsData);
  const flavanoidsMedian = calculateMedian(flavanoidsData);
  const flavanoidsMode = calculateMode(flavanoidsData);

  // Calculate Gamma statistics
  const gammaData = data.map((item) => calculateGamma(item.Ash, item.Hue, item.Magnesium));
  const gammaMean = calculateMean(gammaData);
  const gammaMedian = calculateMedian(gammaData);
  const gammaMode = calculateMode(gammaData);

  return (
    <div>
      <h2>Flavanoids Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class ...</th>
            <th>Class ...</th>
            {/* Add more class headers here if needed */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            <td>{flavanoidsMean.toFixed(3)}</td>
            {/* Display other class means here */}
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            <td>{flavanoidsMedian.toFixed(3)}</td>
            {/* Display other class medians here */}
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            <td>{flavanoidsMode.toFixed(3)}</td>
            {/* Display other class modes here */}
          </tr>
        </tbody>
      </table>

      <h2>Gamma Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class ...</th>
            <th>Class ...</th>
            {/* Add more class headers here if needed */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            <td>{gammaMean.toFixed(3)}</td>
            {/* Display other class means here */}
          </tr>
          <tr>
            <td>Gamma Median</td>
            <td>{gammaMedian.toFixed(3)}</td>
            {/* Display other class medians here */}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            <td>{gammaMode.toFixed(3)}</td>
            {/* Display other class modes here */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WineStatistics;
