import React, {useState, cloneElement} from 'react';
import FlexView from 'react-flexview';
import { Segment, Divider } from 'semantic-ui-react'

export default function Wrapper(props){

    const {collapse} =  useState(props.collapse);
    const { children, ...otherProps } = props;
    const renderChildren = React.Children.map(props.children, (child, index) => {
      return cloneElement(child, {
        index,
        height: props.height,
        ...otherProps
      });
    });

    const collapseDirection = () => {
        if (props.collapseTop) {
          return 0;
        }
    
        // Pass a higher integer into SegmentWrapper to have children
        // components drop further down in the layout order.
        if (props.order) {
          return props.order;
        }
    
        return 0;
      }

    return(
        <Segment
        raised
        style={{
          width: props.width,
          height: props.height,
          paddingTop: '8px',
          paddingBottom: '8px',
          backgroundColor: '#FFFFFF',
          borderTop: '2px solid  teal',
          borderRight: '2px solid  teal',
          borderLeft: '2px solid teal',
          borderBottom: '2px solid teal',
          order: collapse ? collapseDirection() : '',
        }}
      >
        <FlexView>
          <div>
            <div style={{ opacity: .5, fontWeight: 'bold', fontSize: '0.8em', marginBottom: '5px' }}>{props.subTitle}</div>
            <div style={{ padding: '5px', fontWeight: 'bold', fontSize: '1.3em' }}>{props.title}</div>
          </div>
          </FlexView>
          {!collapse &&
            <>
              <Divider style={{ margin: '.65rem -14px' }} />
              {renderChildren}
            </>
          }
    </Segment>
    )
}