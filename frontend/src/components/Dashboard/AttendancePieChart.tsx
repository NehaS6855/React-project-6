import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const AttendancePieChart: React.FC = () => {
  const attendanceData = [
    { title: 'Present', value: 70, color: '#4CAF50' },
    { title: 'Absent', value: 20, color: '#FF5722' },
    { title: 'Late', value: 5, color: '#FFC107' },
    { title: 'On Leave', value: 5, color: '#2196F3' },
  ];

  return (
    <>
      <div>
        <h2>Attendance Records</h2>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {attendanceData.map((entry, index) => (
            <div key={index} style={{ display: 'flex', alignItems: '', marginRight: '10px' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: entry.color,
                  marginRight: '5px',
                  borderRadius: '50%',
                }}
              />
              <span>{entry.title}: {entry.value}%</span>
            </div>
          ))}
        </div>

        <div>
          <PieChart
            data={attendanceData.map(entry => ({
              value: entry.value,
              color: entry.color,
            }))}
            lineWidth={20}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage ?? 0)}%`}
            labelPosition={70}
            labelStyle={{
              fontSize: '5px',
              fontFamily: 'sans-serif',
            }}
            animate
            radius={35}
          />
        </div>
      </div>
    </>
  );
};

export default AttendancePieChart;
