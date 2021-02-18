import React from 'react';
import {AreaChart, Area, Tooltip, CartesianGrid, XAxis, YAxis} from 'recharts';
import data from '../../data/moisture_data.json'


export default function moistureChart(props){

    return(
        <AreaChart width={props.width - 10} height={props.height - 80} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis allowDataOverflow = {true} type="category" angle = '-45' dataKey="week" />
        <YAxis domain={[0, 100]} label="%" />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#33E3FF" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#33E3FF" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="level" stroke="#33E3FF" fillOpacity={1} fill="url(#colorUv)"  strokeWidth="2px"/>
      </AreaChart> 
    )
}