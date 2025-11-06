import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export default function PerformanceDashboard() {
  const gaugeData = [
    { name: 'Social Media', value: 848, color: '#F97316' },
    { name: 'How To Increase Audience', value: 490, color: '#A855F7' },
    { name: 'Email Marketing', value: 167, color: '#3B82F6' },
    { name: 'Empty', value: 500, color: '#F3F4F6' }
  ];

  const total = 1450;
  const startAngle = 180;
  const endAngle = 0;

  return (
    <div className="bg-white rounded-xl p-6 w-full shadow border border-[#E8E8E9]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Top Performing Editions</h2>
        <select className="border border-gray-300 rounded-lg px-2 py-1 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      {/* Gauge Chart */}
      <div className="relative flex items-center justify-center mb-6">
        <PieChart width={240} height={140}>
          <Pie
            data={gaugeData}
            cx={120}
            cy={120}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={70}
            outerRadius={95}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            {gaugeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute" style={{ top: '60px' }}>
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Reader</div>
            <div className="text-3xl font-bold text-gray-900">{total}</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-orange-500 rounded"></div>
            <span className="text-xs text-gray-700">Social Media</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-gray-900">848</span>
            <span className="text-xs text-gray-500">55H</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-purple-500 rounded"></div>
            <span className="text-xs text-gray-700">How To Increase Audience</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-gray-900">490</span>
            <span className="text-xs text-gray-500">20H</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-500 rounded"></div>
            <span className="text-xs text-gray-700">Email Marketing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-gray-900">167</span>
            <span className="text-xs text-gray-500">15H</span>
          </div>
        </div>
      </div>
    </div>
  );
}