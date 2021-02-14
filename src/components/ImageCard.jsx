import React from 'react';
import {Image} from 'semantic-ui-react';
import {Card} from '@blueprintjs/core';
import iotfarm from '../images/iotfarming3.jpg';

export default function ImageCard() {
    return(
            <Image src={iotfarm} height="350px" width="600px"/>
    )
}