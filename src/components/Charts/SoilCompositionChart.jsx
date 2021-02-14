import React from 'react'
import {Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import data from '../../data/composition_data.json';
import _ from 'lodash';

export default function SoilCompositionChart(props){
    const [input, setInput] = React.useState([]);
    const processData = () => {
        let input = [];
        _.each(data, (d) => {
            input.push({
                 "week" : "week" +d.week,
                 "Nitrogen": d.plevel,
                 "Hydrogen": d.hlevel
             });
        });
        setInput(input);
    }
    React.useEffect(() => {
            processData();
    }, []);

    return(
            <LineChart width={props.width - 10} height={props.height - 80} data={input}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis allowDataOverflow = {true} type="category" angle = '-45' dataKey="week"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="Nitrogen" stroke="#8884d8" dot={false} strokeWidth="2px" />
            <Line dataKey="Hydrogen" stroke="#82ca9d" dot={false} strokeWidth="2px" />
            </LineChart>
    );
}