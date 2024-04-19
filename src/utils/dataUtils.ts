// src/utils/dataUtils.ts

// Function to calculate mean of an array
export const calculateMean = (data: number[]): number => {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  };
  
  // Function to calculate median of an array
  export const calculateMedian = (data: number[]): number => {
    const sortedData = data.sort((a, b) => a - b);
    const mid = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[mid - 1] + sortedData[mid]) / 2;
    } else {
      return sortedData[mid];
    }
  };
  
  // Function to calculate mode of an array
  export const calculateMode = (data: number[]): number => {
    const counts: { [key: number]: number } = {};
    data.forEach((val) => {
      counts[val] = (counts[val] || 0) + 1;
    });
    const mode = Object.keys(counts).reduce((a, b) => (counts[parseInt(a)] > counts[parseInt(b)] ? a : b));
    return parseFloat(mode);
  };
  
  // Function to calculate Gamma
  export const calculateGamma = (ash: number, hue: number, magnesium: number): number => {
    return (ash * hue) / magnesium;
  };
  