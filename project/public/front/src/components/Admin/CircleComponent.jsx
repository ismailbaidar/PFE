import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const CircleComponent = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className='CircleComponent' >
        <h2>Meilleure 5 products</h2>
        <div className='circleAndItems' >

        <ResponsiveContainer  width={"100%"} height={'100%'} >
        <PieChart  >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      <div className='itemsCircleF' >

      </div>
        </div>

    </div>
  );
}

export default CircleComponent;
