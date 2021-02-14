import React from 'react';
import {RadialBarChart, RadialBar, Legend, Tooltip} from 'recharts';
import _ from 'lodash';
import {humidity_data as moistureData,composition_data as CompositionData, } from '../../data';

export default function aggregateChart(){
    const [allData, setAllData] = React.useState([]);
    const processData = () => {
        let data = {};
        let avg_moisture = 0;
        
        _.each(humidity_data, (obj) => {
            avg_moisture += obj.level;
        });
        avg_moisture = avg_moisture/ 53;
        let avg_composition = 0;
        _.each(composition_data, (obj) => {
            avg_composition += obj.level;
        });
        avg_composition = avg_moisture/ 53;
        
    }

    return (
        <RadialBarChart 
        width={730} 
        height={250} 
        innerRadius="10%" 
        outerRadius="80%" 
        data={data} 
        startAngle={180} 
        endAngle={0}
        >
        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
        <Tooltip />
        </RadialBarChart>
    )
}