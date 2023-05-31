import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
  {
    name: 'Page A',
    uv: 3000,
    pv: 2400,
    amt: 2000,
  },
  {
    name: 'Page t',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page er',
    uv: 1658,
    pv: 479,
    amt: 2210,
  },
  {
    name: 'Page nh',
    uv: 300,
    pv: 1780,
    amt: 2210,
  },
  {
    name: 'Page bf',
    uv: 3000,
    pv: 1398,
    amt: 999,
  },
  {
    name: 'Page yu',
    uv: 1780,
    pv: 520,
    amt: 2200,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const ModelData = () => {
  return (
    <div className='ModelData'  onClick={(e)=>e.stopPropagation()} >
    <div className='HeadModelData' >Info produit  <span style={{color:'rgb(153, 149, 149)',marginLeft:'5px'}} >#1895652</span> </div>
    <div className='BodyModelData' >

    <div className='itemBModelData'  >
    <p className='titleModelData' >Name</p>
    <p className='CntModel' >Laptop</p>
    </div>
    <div className='itemBModelData'  >
    <p className='titleModelData' >Price</p>
    <p className='CntModel' >120$</p>
    </div>
    <div className='itemBModelData'  >
    <p className='titleModelData' >Brand</p>
    <p className='CntModel' >Asus</p>
    </div>
    <div className='itemBModelData'  >
    <p className='titleModelData' >Categorie</p>
    <p className='CntModel' >Laptops</p>
    </div>

    <div className='itemBModelData'  >
    <p className='titleModelData' >Total seles</p>
    <p className='CntModel' >127</p>
    </div>

    <div className='itemBModelData' >
<p className='titleModelData' >Total Icome</p>
    <p className='CntModel' >18709$</p>
    </div>

<div  className='itemBModelData' >
<p className='titleModelData' >Rank</p>
    <p className='CntModel' >17</p>
</div>
    <div className='itemBModelData' >
    <p className='titleModelData' >Statistique</p>
    <div className='ChartItem' >
    <ResponsiveContainer width="100%" height="100%">
    <LineChart width={300} height={100} data={data}>
      <Line type="monotone" dataKey="pv" stroke="#d33" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
    </div>

    </div>
    </div>
    </div>
  );
}

export default ModelData;
