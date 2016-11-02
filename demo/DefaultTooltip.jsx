import React from 'react';
import {Tooltip} from '../src/index';

const DefaultTooltip = () => {
    return (
        <Tooltip
            content="The winter is coming, hahaha!"
        >
            <span style={{fontSize:'5em'}}>&#x2603;</span>
        </Tooltip>
    );
}

export default DefaultTooltip;
