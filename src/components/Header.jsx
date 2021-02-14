import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Tab, Tabs, Button, Divider} from '@blueprintjs/core';
import FlexView from 'react-flexview/lib';
import iot_icon from '../images/icon-sustainability.png';

export default function Header(props) {
    let location = useLocation();
    return( 
        <div  className="header-image">
        <FlexView>
        <header className="App-header">
          <div>
          <img src={iot_icon} style={{position: 'relative', height:'25px', width:'25px'}}/>
          <span style={{paddingLeft: '10px'}}>
          Precision Farming
          </span>  
          </div>
        </header>
        <FlexView cellPadding='20px'>
        <Tabs
        id='navbar'
        key={'navbar'}
        large={true}
        selectedTabId={location.pathname.substr(1)}
        >
        <Tab key='Overview' id='Overview' className='navTab'>
            <NavLink to='/Overview'>Overview</NavLink>
        </Tab>
        <Tab key='selection' id='Select' className='navTab'>
            <NavLink to='/Select'>Select</NavLink>
        </Tab>
        <Tab key='Monitor' id='Monitor' className='navTab'>
            <NavLink to='/Monitor'>Monitor</NavLink>
        </Tab>
        <Tab key='Maintain' id='Maintain' className='navTab'>
            <NavLink to='/Maintain'>Maintain</NavLink>
        </Tab>
        </Tabs>
        <Divider/>
        <FlexView cellPadding="140px">
            <Button minimal icon="notifications"/>
            <Button minimal icon="settings"/>
        </FlexView>
        </FlexView>
        </FlexView>
        </div>
    )
}
