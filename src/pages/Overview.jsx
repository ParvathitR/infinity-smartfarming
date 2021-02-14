import React from 'react';
import FlexView from 'react-flexview/lib';
import CompositionChart from '../components/Charts/SoilCompositionChart';
import HumidityChart from '../components/Charts/humidityChart';
import Wrapper from '../components/Wrapper';
import FarmCard from '../components/FarmCard';
import DataCard from '../components/DataCard';
import moistureData from '../data/humidity_data.json'
import acidityData from '../data/acidity_data.json'
import _ from 'lodash';
import ImageCard from '../components/ImageCard';

export default function Overview() {

    const [moisture, setMoisture] = React.useState([]);
    const [acidity, setAcidity] = React.useState([]);

    const processData = () => {
        let input = [];
        _.each(moistureData, (d) => {
            input.push({
                 "week" : "week" +d.week,
                 "level": d.level
             });
        });
        setMoisture(input);
        input = [];
        _.each(acidityData, (d) => {
            input.push({
                 "week" : "week" +d.week,
                 "level": d.level
             });
        });
        setAcidity(input);
    }

    React.useEffect(() => {
            processData();
    }, []);

    return (
        <>
         <FlexView 
         marginTop= '20px' 
         hAlignContent='center'
         width='100%'>
            <FlexView
            marginBottom= '20px'
            vAlignContent='center'
            hAlignContent='left'
            marginLeft='20px'
            marginRight='20px'
            > 
                <DataCard/>
            </FlexView>
            <FlexView>
                <ImageCard/>
            </FlexView>
            <FlexView
            marginTop= '0px'
            marginBottom= '20px'
            vAlignContent='center'
            hAlignContent='right'
            marginLeft='20px'
            marginRight='20px'
            >   
                <FarmCard/>
            </FlexView>
        </FlexView>
        <FlexView
        marginTop= '10px'
        marginBottom= '10px'
        grow={.1}
        vAlignContent='center'
        marginLeft='30px'
        marginRight='30px'
        >
            <Wrapper 
            title= "Soil Composition"
            subTitle= "OVERVIEW"
            height = {450}
            width = {1380}
            collapse='true'
            fill= {false}
            >
                <CompositionChart/>
            </Wrapper>
        </FlexView>
        <>
        {  moisture.length > 0 &&
            <FlexView
            marginTop= '10px'
            marginBottom= '10px'
            grow={.1}
            vAlignContent='center'
            marginLeft='30px'
            marginRight='30px'
            >
                <Wrapper 
                title= "Soil moisture"
                subTitle= "OVERVIEW"
                height = {450}
                width = {1380}
                collapse='true'
                fill= {false}
                >
                    <HumidityChart data = {moisture}/>
                </Wrapper>   
            </FlexView>
        }
        { acidity.length > 0 &&
            <FlexView
            marginTop= '10px'
            marginBottom= '10px'
            grow={.1}
            vAlignContent='center'
            marginLeft='30px'
            marginRight='30px'
            >
                <Wrapper 
                title= "Atmospheric humidity"
                subTitle= "OVERVIEW"
                height = {450}
                width = {1380}
                collapse='true'
                fill= {false}
                >
                    <HumidityChart data = {acidity}/>
                </Wrapper>
            </FlexView>
        }
        </>
     </>
    )
}