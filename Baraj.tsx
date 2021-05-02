import React, { useState, useEffect } from 'react';
import { View, Dimensions } from "react-native";
import { getBarajInfo } from './getBarajInfo';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width - 40;

const chartConfig = {
  backgroundGradientFrom: '#Ffffff',
  backgroundGradientTo: '#ffffff',
  barPercentage: 1.3,
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,

  style: {
    borderRadius: 16,
  },
  propsForBackgroundLines: {
    strokeWidth: 1,
    stroke: '#efefef',
    strokeDasharray: '0',
  },
};


function Baraj({ route }) {

  const { baraj } = route.params;

  const [array1, setArray1] = useState<any[]>([0]);
  const [array2, setArray2] = useState<any[]>([0]);


  useEffect(() => {
    let mounted = true;
    getBarajInfo(baraj.query)
      .then(items => {
        if (mounted) {
          setArray1(items[0].veriListeleriField[1].slice(-7))
          setArray2(items[1].veriListeleriField[1].slice(-7))
        }
      })
    return () => mounted = false;
  }, [])


  const data1 = {
    datasets: [
      {
        data: array1,

      }
    ],
    legend: ["Son 7 Gun Icindeki Doluluk Oranlari"]
  };

  const data2 = {
    datasets: [
      {
        data: array2,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ["Son 7 Gun Icindeki Su Hacimleri"]
  };

  return (
    <View
      style={{
        padding: 20
      }}
    >
      <LineChart
        data={data1}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />

      <LineChart
        data={data2}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />

    </View>
  );

}

export default Baraj;
