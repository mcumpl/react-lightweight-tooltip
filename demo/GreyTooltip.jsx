import React from 'react';
import {Tooltip} from '../src/index';

const GreyTooltip = () => {
    return (
        <div>
            <Tooltip
                background="grey"
                color="#000"
                content={
                    [
                        <img key="mcumplavatar" src="https://avatars0.githubusercontent.com/u/9491005" style={{ width: '100px', borderRadius: '50%', display: 'block', margin: 'auto' }} />,
                        <div key="mcumplcaption" style={{ textAlign: 'center', padding: '10px 20px' }}>
                            Hi there, I am <a href="https://github.com/mcumpl" target="_blank">Michal</a> and I wrote this to show how the tooltip looks when it contains a little more text than expected.
                        </div>,
                    ]
                }
            >
                <span style={{fontSize:'5em'}}>&#9784;</span>
            </Tooltip>
        </div>
    );
}

export default GreyTooltip;   
