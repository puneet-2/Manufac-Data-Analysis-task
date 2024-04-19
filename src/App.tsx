// src/App.tsx

import React from 'react';
import WineStatistics from './components/WineStatistics';

const wineData = [{ Alcohol: 14.23, Flavanoids: 3.06, Ash: 2.43, Hue: 1.04, Magnesium: 106 },
  { Alcohol: 13.2, Flavanoids: 2.76, Ash: 2.14, Hue: 1.05, Magnesium: 101 }
  // Modify data set accordingly
];

const App: React.FC = () => {
  return (
    <div className="App">
      <WineStatistics data={wineData} />
    </div>
  );
};

export default App;
