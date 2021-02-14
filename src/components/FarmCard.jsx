import React from 'react';
import {Image} from 'semantic-ui-react';
import {Icon, Card, H4, H6} from '@blueprintjs/core';
import farmMap from '../images/farm_map.png';

export default function FarmCard(props) {
    return(
        <Card>
            <H4>
                <Icon icon="satellite"/>
                <span style={{paddingLeft:'10px'}}>
                Customer's Farm
                </span>
            </H4>
            <Image src={farmMap} height="210px" width="300px"/>
            <H6>Sattelite Map of the farm</H6>
        </Card>
    )
}